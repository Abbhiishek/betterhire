import JobFeed from "@/components/Jobs/JobFeed";
import { BriefcaseBusiness } from "lucide-react";


export const metadata = {
    title: 'Job Feed',
    description: 'Explore the latest job opportunities for developers and tech professionals.',
    openGraph: {
        title: 'Job Feed',
        description: 'Explore the latest job opportunities for developers and tech professionals.',
        type: 'website',
        url: "https://betterhire.abhishekkushwaha.me/jobs",
        images: [
            {
                url: 'http://betterhire.abhishekkushwaha.me/hired.png',
                width: 1200,
                height: 630,
                alt: 'Job Feed',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Job Feed',
        description: 'Explore the latest job opportunities for developers and tech professionals.',
        images: ['http://betterhire.abhishekkushwaha.me/hired.png'],
    },
    keywords: ['jobs', 'tech jobs', 'developer jobs', 'IT careers', 'software engineering'],
    robots: 'index, follow',
    canonical: 'https://betterhire.abhishekkushwaha.me/jobs',
};

function JobFeedPage() {
    return (
        <div className="px-4 h-full mt-10 mb-32">
            <header className="mb-8 flex flex-col items-center justify-center gap-2">
                <BriefcaseBusiness className="w-12 h-12 text-gray-400" />
                <h1 className="text-4xl font-bold text-center mb-2">Job Opportunities</h1>
                <p className="text-xl text-gray-600 text-center font-schoolbell">
                    Explore the latest job opportunities for developers and tech professionals.
                </p>
            </header>

            <div className="rounded-lg border bg-background shadow h-[900px] container mx-auto">
                <JobFeed />
            </div>
        </div>
    );
}

export default JobFeedPage;