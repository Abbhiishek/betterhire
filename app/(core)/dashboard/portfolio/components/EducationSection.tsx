import AddEducationForm from '@/components/Dashboard/form/education';
import { Separator } from '@/components/ui/separator';
import { ResumeCard } from '@/components/user/resume-card';
import { Education } from '@prisma/client'
import React from 'react'

function EducationSection({ educationDetails }: { educationDetails: Education[] }) {


    return educationDetails.length > 0 ? (
        <main className="lg:container w-full space-y-2">
            <div className="flex justify-between w-full py-4">
                <span>Add Education</span>
            </div>
            {educationDetails.map((education) => (
                <ResumeCard
                    key={education.school}
                    href={education.href}
                    logoUrl={education.logoUrl}
                    altText={education.school}
                    title={education.school}
                    subtitle={education.degree}
                    period={`${education.start} - ${education.end}`}
                />
            ))}
            <Separator />
            <AddEducationForm />
        </main>
    ) : (
        <main className="flex flex-col space-y-4  w-full">
            <p className="text-lg text-stone-500 text-center">
                You do not have any Education yet. Create one to get started.
            </p>
            <AddEducationForm />
        </main>
    );
}



export default EducationSection