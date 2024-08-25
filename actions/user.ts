import { clientPrisma } from "@/lib/prisma"

export async function getUser(username: string) {
    const user = await clientPrisma.user.findUnique({
        where: {
            username: username
        },
        select: {
            name: true,
            username: true,
            image: true,
            shortbio: true,
            Education: true,
            projects: true,
            Work: true,
            skills: true,
            social: true,
            email: true,
            telephone: true,
            initials: true,
            summary: true,
        }
    })
    return user
}