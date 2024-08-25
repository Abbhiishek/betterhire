"use server"

import { ResumeType } from "@/data/resume"
import { auth } from "@/lib/auth"
import { clientPrisma } from "@/lib/prisma"
import { User } from "@prisma/client"

export const populateUser = async (resume: ResumeType) => {


    const Session = await auth()

    if (!Session) {
        return {
            error: "Unauthorized"
        }
    }

    const User = await clientPrisma.user.update({
        where: {
            id: Session?.user?.id
        },
        data: {
            name: resume.name,
            email: resume.contact.email,
            telephone: resume.contact.tel,
            location: resume.location,
            initials: "",
            skills: [...resume.skills],
            shortbio: resume.description,
            summary: resume.summary,
            userType: "jobSeeker",
            onboardingCompleted: true,
        }
    })

    {
        resume.education.map(async (education) => {


            const alreadyExists = await clientPrisma.education.findFirst({
                where: {
                    userId: User.id,
                    school: education.school,
                    degree: education.degree,
                }
            })

            if (alreadyExists) {
                return
            }

            await clientPrisma.education.create({
                data: {
                    userId: User.id,
                    school: education.school || "",
                    degree: education.degree || "",
                    href: education.href || "",
                    start: education.start || "",
                    end: education.end || "",
                    logoUrl: education.logoUrl || "",
                }
            })
        })
    }

    {
        resume.work.map(async (work) => {

            const alreadyExists = await clientPrisma.work.findFirst({
                where: {
                    userId: User.id,
                    company: work.company,
                    title: work.title,
                }
            })

            if (alreadyExists) {
                return
            }

            await clientPrisma.work.create({
                data: {
                    userId: User.id,
                    company: work.company,
                    title: work.title,
                    href: work.href || "",
                    start: work.start,
                    end: work.end || "",
                    logoUrl: work.logoUrl || "",
                    description: work.description || "",
                }
            })
        })
    }


    {
        resume.projects.map(async (project) => {


            const alreadyExists = await clientPrisma.project.findFirst({
                where: {
                    userId: User.id,
                    title: project.title,
                }
            })

            if (alreadyExists) {
                return
            }

            await clientPrisma.project.create({
                data: {
                    userId: User.id,
                    title: project.title,
                    href: project.href || "",
                    description: project.description || "",
                    dates: "",
                    tags: [...project.technologies],
                    image: project.image || "",
                    video: project.video || "",

                }
            })
        })
    }


    return {
        success: "User populated",
        user: User
    }
}