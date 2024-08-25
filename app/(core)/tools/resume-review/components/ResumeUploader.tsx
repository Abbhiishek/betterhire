'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BorderBeam } from '@/components/ui/border-beam';
import { Button } from '@/components/ui/button';
import { UploadDropzone } from '@/lib/uploadthing';
import ReviewDisplay from './ReviewDisplay';
import { ReviewResponse } from '../page';
const ResumeUploader: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [review, setReview] = useState<ReviewResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [progress, setProgress] = useState(0);
    const [estimatedTime, setEstimatedTime] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (loading) {
            interval = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress >= 95) {
                        clearInterval(interval);
                        return 95;
                    }
                    return prevProgress + 5;
                });
            }, 500);
        }
        return () => clearInterval(interval);
    }, [loading]);

    const handleSubmit = async () => {
        if (!file) return;

        setLoading(true);
        setError(null);
        setProgress(0);
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post<ReviewResponse>('/api/review-resume', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            const data = response.data as ReviewResponse
            setReview(data);
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred while processing the resume. Please try again.');
        }
        setLoading(false);
    };

    return (
        <>
            <div className="dark:bg-primary-foreground p-6 h-[400px] w-[700px] rounded-xl shadow-inner relative flex justify-center items-center">
                <div className="flex flex-col items-center w-full">
                    <UploadDropzone
                        className="w-full mb-4 max-w-2xl border-primary border-4"
                        onDrop={(files) => {
                            if (files.length > 0) {
                                setFile(files[0]);
                            }
                        }}
                        endpoint='resumeUploader'
                    />
                    <Button
                        onClick={handleSubmit}
                        disabled={!file || loading}
                        className="bg-green-500 text-white px-6 py-2 rounded-full font-mono disabled:bg-gray-300 hover:bg-green-600 transition-colors"
                    >
                        {loading ? 'Analyzing...' : 'Get AI Review'}
                    </Button>
                </div>

                {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
                <BorderBeam size={250} duration={12} delay={9} />
            </div>
            {review && <ReviewDisplay review={review} />}
        </>
    );
};

export default ResumeUploader;