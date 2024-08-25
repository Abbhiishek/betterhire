import React from 'react'
import { BentoCard, BentoGrid } from '../ui/bento-grid'

import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon, SearchCheck, Bot, ChartSpline, ScanEye } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import Marquee from '../ui/marquee';
import { AnimatedList } from '../ui/animated-list';
import { AnimatedListDemo } from './AnimatedListExample';
import { AnimatedBeamMultipleOutputDemo } from './AnimatedBeam';
import { TypographyH1, TypographyH2, TypographyH3, TypographyP } from '../ui/typography';


const files = [
    {
        name: "candidate_ranker.py",
        body: "Python algorithm that calculates candidate rankings based on their GitHub and LinkedIn data.",
    },
    {
        name: "ranking_criteria.json",
        body: "JSON file defining the weighting and importance of various GitHub and LinkedIn metrics in the ranking algorithm",
    },
    {
        name: "skill_assessment.xlsx",
        body: "Excel spreadsheet containing various skill assessment tests and their scoring matrices for different job roles.",
    },
    {
        name: "ai_matching_algorithm.ipynb",
        body: "Jupyter notebook with machine learning algorithms for matching candidates to job openings based on various parameters.",
    },
    {
        name: "resume_rank_adjuster.rb",
        body: "Ruby script that adjusts candidate rankings based on the correlation between resume claims and verifiable GitHub/LinkedIn data.",
    },
];


const features = [
    {
        Icon: Bot,
        name: "AI-Powered Ranking",
        description: "Our algorithm continuously refines candidate rankings based on their GitHub contributions and LinkedIn achievements",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Marquee
                pauseOnHover
                className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
            >
                {files.map((f, idx) => (
                    <figure
                        key={idx}
                        className={cn(
                            "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                            "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
                        )}
                    >
                        <div className="flex flex-row items-center gap-2">
                            <div className="flex flex-col">
                                <figcaption className="text-sm font-medium dark:text-white ">
                                    {f.name}
                                </figcaption>
                            </div>
                        </div>
                        <blockquote className="mt-2 text-xs">{f.body}</blockquote>
                    </figure>
                ))}
            </Marquee>
        ),
    },
    {
        Icon: SearchCheck,
        name: "Transparency",
        description: "Watch the leaderboard evolve in real-time. Know your standing and why.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (
            <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
        ),
    },
    {
        Icon: ScanEye,
        name: "Building Profile",
        description: "we scan your GitHub and LinkedIn profiles to build a comprehensive profile of your skills and achievements.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (
            <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
        ),
    },
    {
        Icon: ChartSpline,
        name: "Progress Pulse",
        description: "Measure your momentum—because growth never stops.",
        className: "col-span-3 lg:col-span-1",
        href: "#",
        cta: "Learn more",
        background: (
            <Calendar
                mode="single"
                selected={new Date(2022, 4, 11, 0, 0, 0)}
                className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
            />
        ),
    },
];


function ToolSection() {
    return (
        <div className='container mx-auto'>
            <TypographyH2 className="text-center py-4 font-mono">
                What’s Lacking in Today’s Complex Job Market?
            </TypographyH2>
            <BentoGrid>
                {features.map((feature, idx) => (
                    <BentoCard key={idx} {...feature} />
                ))}
            </BentoGrid>
        </div>
    )
}

export default ToolSection