import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server";
import { writeFile } from 'fs/promises';
import { join } from 'path';
import os from 'os';
import { ResumeReviewPrompt } from '@/data/prompt';

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not set in the environment variables');
}

const genAI = new GoogleGenerativeAI(apiKey);
const fileManager = new GoogleAIFileManager(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

async function uploadToGemini(filePath: string, mimeType: string, fileName: string) {
    const uploadResult = await fileManager.uploadFile(filePath, {
        mimeType,
        displayName: fileName,
    });
    console.log(`Uploaded file ${uploadResult.file.displayName} as: ${uploadResult.file.name}`);
    return uploadResult.file;
}

async function waitForFilesActive(files: any[]) {
    console.log("Waiting for file processing...");
    for (const name of files.map((file) => file.name)) {
        let file = await fileManager.getFile(name);
        while (file.state === "PROCESSING") {
            await new Promise((resolve) => setTimeout(resolve, 10_000));
            file = await fileManager.getFile(name)
        }
        if (file.state !== "ACTIVE") {
            throw Error(`File ${file.name} failed to process`);
        }
    }
    console.log("...all files ready");
}

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const tempDir = os.tmpdir();
        const tempFilePath = join(tempDir, file.name);
        await writeFile(tempFilePath, buffer);

        const uploadedFile = await uploadToGemini(tempFilePath, file.type, file.name);
        await waitForFilesActive([uploadedFile]);
        const prompt = ResumeReviewPrompt;

        const chatSession = model.startChat({
            generationConfig,
            history: [
                {
                    role: "user",
                    parts: [
                        {
                            fileData: {
                                mimeType: uploadedFile.mimeType,
                                fileUri: uploadedFile.uri,
                            },
                        },
                        { text: prompt },
                    ],
                },
            ],
        });

        const result = await chatSession.sendMessage("Analyze My resume");
        const reviewJson = JSON.parse(result.response.text());

        return NextResponse.json(reviewJson);
    } catch (error) {
        console.error('Error processing resume:', error);
        return NextResponse.json(
            { error: 'An error occurred while processing the resume' },
            { status: 500 }
        );
    }
}
export async function GET() {
    return NextResponse.json({ error: 'Only POST requests are supported' }, { status: 400 });
}


