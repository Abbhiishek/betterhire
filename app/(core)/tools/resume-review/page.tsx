import ResumeUploader from './components/ResumeUploader';
import { TypographyH1, TypographySmall } from '@/components/ui/typography';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Free Resume Review | Your Company Name',
    description: 'Get detailed feedback on your resume in seconds, for free!',
    openGraph: {
        title: 'Free Resume Review | Your Company Name',
        description: 'Get detailed feedback on your resume in seconds, for free!',
        images: [
            {
                url: '/resume.png', // Replace with your actual image path
                width: 1200,
                height: 630,
                alt: 'Free Resume Review',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free Resume Review | Your Company Name',
        description: 'Get detailed feedback on your resume in seconds, for free!',
        images: ['/resume.png'], // Replace with your actual image path
    },
};

export default function ResumeReviewPage() {
    return (
        <div className="container mx-auto mt-8 p-2 dark:text-white bg-background">
            <div className='flex flex-col gap-4 justify-center items-center '>
                <TypographyH1>Free Resume Review</TypographyH1>
                <TypographySmall>Get detailed feedback on your resume in seconds, for free!</TypographySmall>
                <ResumeUploader />
            </div>
        </div>
    );
}


export interface ReviewResponse {
    karma_points: number;
    summary: string;
    strengths: string[];
    areas_for_improvement: string[];
    skills_analysis: {
        technical_skills: string[];
        soft_skills: string[];
        skill_gaps: string[];
    };
    experience_analysis: string;
    education_analysis: string;
    impact_statements: string[];
    ats_optimization: string[];
    formatting_suggestions: string[];
    industry_specific_advice: string;
    recommended_certifications: string[];
    recommended_projects: string[];
    job_recommendations: string[];
}