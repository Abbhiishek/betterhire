import React from 'react'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import General from './components/General';
import { auth } from '@/lib/auth';
import { redirect } from "next/navigation";
import { clientPrisma } from '@/lib/prisma';
import EducationSection from './components/EducationSection';
import SkillsToolsSection from './components/SkillsToolsSection';
import WorkExperienceSection from '@/components/Dashboard/form/work';
import ProjectSection from './components/ProjectSection';

export default async function PortfolioPage() {
    const user = await auth()
    if (!user) {
        redirect("/login")
    }
    const userDetails = await clientPrisma.user.findUnique({
        where: {
            id: user.user?.id
        },
        include: {
            Education: {
                orderBy: {
                    end: 'desc'
                }
            },
            social: true,
            Work: true,
            projects: true,
        }
    })
    if (!userDetails) {
        redirect("/login")
    }

    const navItems = [
        {
            name: "General",
            value: "general",
            // component: <GeneralSection siteId={slug} />,
            component: <General userDetails={userDetails!} />
        },
        {
            name: "Education",
            value: "education",
            component: <EducationSection educationDetails={userDetails.Education} />,
        },
        {
            name: "Skills & Tools",
            value: "tools",
            component: <SkillsToolsSection />,
        },
        {
            name: "Work",
            value: "work",
            component: <WorkExperienceSection />,
        },
        {
            name: "Project",
            value: "project",
            component: <ProjectSection projects={userDetails.projects} />
        },
    ];

    return (
        <div className="flex space-x-4 border-b  pb-4 pt-2">
            <Tabs defaultValue="general" className="w-full h-full" >
                <TabsList className="grid w-full lg:grid-cols-8 h-full grid-cols-1  rounded-3xl content-center  ">
                    {
                        navItems.map((nav, index) => (
                            <TabsTrigger key={index} value={nav.value}
                                className={`rounded-3xl dark:text-white`}
                            >{nav.name}</TabsTrigger>
                        ))
                    }
                </TabsList>
                {
                    navItems.map((nav, index) => (
                        <TabsContent key={index} value={nav.value}>{nav.component}</TabsContent>
                    ))
                }
            </Tabs>
        </div>
    )
}

