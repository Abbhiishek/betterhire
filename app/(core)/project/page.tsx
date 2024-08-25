
import { Icons } from '@/components/icons';
import BlurFade from '@/components/ui/blur-fade';
import { TypographyH1, TypographyP } from '@/components/ui/typography';
import { ProjectCard } from '@/components/user/project-card';
import { clientPrisma } from '@/lib/prisma';
import React, { useState } from 'react';
const BLUR_FADE_DELAY = 0.02;

export const metadata = {
    title: 'Projects | DevResume',
    description: 'Explore my portfolio of projects and development work.',
    openGraph: {
        title: 'Projects | DevResume',
        description: 'Explore my portfolio of projects and development work.',
        type: 'website',
        url: 'https://app.dresume.me/project',
        images: [
            {
                url: 'https://app.dresume.me/og-image.png',
                width: 1200,
                height: 630,
                alt: 'DevResume Projects',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Projects | DevResume',
        description: 'Explore my portfolio of projects and development work.',
        images: ['https://app.dresume.me/og-image.png'],
    },
};


async function PublicProjects() {
    // later we fetch all the data from the backend db :)
    const projects = [
        {
            title: "DevResume.",
            href: "https://app.dresume.me",
            active: true,
            description:
                "Craft your developer Portfolio within Few Seconds.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Shadcn UI",
                "Vercel",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://chatcollect.com",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/Abbhiishek/dresume",
                    icon: <Icons.github className="size-3" />,
                }
            ],
            image: "",
            video: "",
        },
        {
            title: "Magic UI",
            href: "https://magicui.design",
            dates: "June 2023 - Present",
            active: true,
            description:
                "Designed, developed and sold animated UI components for developers.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Stripe",
                "Shadcn UI",
                "Magic UI",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://magicui.design",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/magicuidesign/magicui",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "https://cdn.magicui.design/bento-grid.mp4",
        },
        {
            title: "llm.report",
            href: "https://llm.report",
            dates: "April 2023 - September 2023",
            active: true,
            description:
                "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Shadcn UI",
                "Magic UI",
                "Stripe",
                "Cloudflare Workers",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://llm.report",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/dillionverma/llm.report",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "https://cdn.llm.report/openai-demo.mp4",
        },
        {
            title: "Automatic Chat",
            href: "https://automatic.chat",
            dates: "April 2023 - March 2024",
            active: true,
            description:
                "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Shadcn UI",
                "Magic UI",
                "Stripe",
                "Cloudflare Workers",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://automatic.chat",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "",
            video:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
        },
    ]


    const userProjects = await clientPrisma.project.findMany()


    return (
        <div className="min-h-screen p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <TypographyH1
                        className="dark:text-blue-100 mb-2"
                    >
                        Developer Showcase💜
                    </TypographyH1>
                    <TypographyP className="text-gray-500 font-mono">
                        Hand-picked {userProjects.length}+ projects from the cutting edge of tech. Curated by experts, built by visionaries.
                    </TypographyP>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {userProjects.map((project, id) => {

                        let videos = [
                            "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
                            "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
                            "https://cdn.magicui.design/bento-grid.mp4"
                        ]
                        return (
                            <BlurFade
                                key={project.title}
                                delay={BLUR_FADE_DELAY * 12 + id * 0.20}
                            >
                                <ProjectCard
                                    key={project.title}
                                    title={project.title}
                                    description={project.description.slice(0, 100) + "..."}
                                    tags={project.tags}
                                    image={project.image || ""}
                                    video={project.video || ""}
                                    href="#"
                                    dates="2021-2022"
                                />
                            </BlurFade>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default PublicProjects;
