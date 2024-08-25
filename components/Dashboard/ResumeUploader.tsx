"use client"

import { UploadButton } from '@/lib/uploadthing'
import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner';
import { Button } from '../ui/button';

function ResumeUploader() {

    const [file, setFile] = useState<File | null>(null);


    const handleSubmit = async () => {
        if (!file) return;
        const formData = new FormData();
        formData.append('file', file);


        console.log("now doing genai")

        try {
            const response = await axios.post('/api/resume-upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.status === 200) {
                console.log("Resume Uploaded", response.data);
                toast.success("Resume Uploaded");
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };




    return (
        <div className='flex flex-col gap-4'>
            <UploadButton
                endpoint="resumeUploader"
                onClientUploadComplete={async (res) => {
                    const url = res[0].url
                    console.log("Resume Uploaded", url)
                    await handleSubmit()
                }}
                onUploadError={(error: Error) => {
                    console.log("Error", error)
                }}
                onBeforeUploadBegin={(files) => {
                    console.log("Uploading...", files)
                    if (files.length > 1) {
                        setFile(files[0])
                        return [files[0]]
                    }
                    setFile(files[0])
                    return files
                }}
            />

            <Button
                onClick={handleSubmit}>
                Extract details
            </Button>
        </div>
    )
}

export default ResumeUploader