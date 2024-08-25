import React from 'react'
import { Separator } from '@/components/ui/separator'
import { ResumeCard } from '@/components/user/resume-card'
import { clientPrisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { Work } from '@prisma/client'
import AddWorkForm from './workform'

async function WorkExperienceSection() {
    const user = await auth();
    if (!user?.user?.id) {
        redirect("/login");
    }

    const work = await clientPrisma.work.findMany({
        where: {
            userId: user.user.id
        },
        orderBy: {
            end: 'desc'
        }
    });

    return work.length > 0 ? (
        <main className="lg:container w-full space-y-2">
            <div className="flex justify-between w-full py-4">
                <span>Work Experience</span>
                <AddWorkForm />
            </div>
            {work.map((work) => (
                <ResumeCard
                    key={work.id}
                    href={work.href}
                    logoUrl={work.logoUrl}
                    altText={work.company}
                    title={work.title}
                    subtitle={work.company}
                    period={`${work.start} - ${work.end === "Present" ? "Present" : work.end}`}
                    badges={work.badges}
                    description={work.description}
                />
            ))}
            <Separator />
        </main>
    ) : (
        <main className="flex flex-col space-y-4 w-full">
            <p className="text-lg text-stone-500 text-center">
                You do not have any work experience yet. Add one to get started.
            </p>
            <AddWorkForm />
        </main>
    );
}

export default WorkExperienceSection