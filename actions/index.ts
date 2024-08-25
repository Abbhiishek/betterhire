"use server"

import { auth } from "@/lib/auth";
import { UTApi } from "uploadthing/server";
import { clientPrisma } from "@/lib/prisma";
import { Education, Work } from "@prisma/client";

const utapi = new UTApi();

export async function updateUserDetails(formData: FormData, _id: unknown,
    key: string) {
    const user = await auth()

    if (!user) {
        return {
            error: "You are not authorized to perform this action"
        }
    }

    console.log(key)

    const value = formData.get(key) as string;

    try {
        let response;
        if (key === "avatar") {

            if (!process.env.UPLOADTHING_SECRET) {
                return {
                    error:
                        "Missing UPLOADTHING_SECRET token.",
                };
            }
            const file = formData.get(key) as File;

            console.log(file)

            const res = await utapi.uploadFiles(file)

            if (res.error) {
                return {
                    error: res.error
                }
            }

            response = await clientPrisma.user.update({
                where: {
                    id: user.user?.id,
                },
                data: {
                    image: res.data.url
                },
            });
            console.log(response)
        } else if (key === "name") {
            response = await clientPrisma.user.update({
                where: {
                    id: user.user?.id,
                },
                data: {
                    name: value,
                    initials: value.split(" ").map((word) => word[0]).join("").toUpperCase(),
                },
            });
        } else if (key === "skills") {

            const skills = formData.getAll(key) as string[];
            response = await clientPrisma.user.update({
                where: {
                    id: user.user?.id,
                },
                data: {
                    skills,
                },
            });
        } else {
            response = await clientPrisma.user.update({
                where: {
                    id: user.user?.id,
                },
                data: {
                    [key]: value,
                },
            });
        }

        return response;
    } catch (error: any) {
        if (error.code === "P2002") {
            return {
                error: `This ${key} is already in use`,
            };
        } else {
            return {
                error: error.message,
            };
        }
    }
}

export async function updateEducationDetails(formData: FormData) {
    const user = await auth();

    if (!user) {
        return {
            error: "You are not authorized to perform this action"
        };
    }

    const educationData: Omit<Education, 'id' | 'userId' | 'createdAt' | 'updatedAt'> = {
        school: formData.get('school') as string,
        degree: formData.get('degree') as string,
        href: formData.get('href') as string,
        start: formData.get('start') as string,
        end: formData.get('end') as string,
        logoUrl: formData.get('logoUrl') as string,
    };

    const educationId = formData.get('id') as string;


    if (!process.env.UPLOADTHING_SECRET) {
        return {
            error:
                "Missing UPLOADTHING_SECRET token.",
        };
    }
    const file = formData.get("logoUrl") as File;

    console.log(file)

    const res = await utapi.uploadFiles(file)


    if (!res.data?.url) {
        return {
            error: "Failed to upload logo"
        }
    }

    try {
        let response;
        if (educationId) {
            // Update existing education entry
            response = await clientPrisma.education.update({
                where: {
                    id: educationId,
                    userId: user.user?.id,
                },
                data: {
                    ...educationData,
                    logoUrl: res.data?.url
                },
            });
        } else {
            // Create new education entry



            response = await clientPrisma.education.create({
                data: {
                    school: educationData.school,
                    degree: educationData.degree,
                    href: educationData.href,
                    start: educationData.start,
                    end: educationData.end,
                    logoUrl: res.data?.url,
                    userId: user.user?.id as string,
                },
            });
        }

        return response;
    } catch (error: any) {
        if (error.code === "P2002") {
            return {
                error: "This education entry already exists",
            };
        } else {
            return {
                error: error.message,
            };
        }
    }
}

export async function updateWorkExperience(formData: FormData) {
    const user = await auth();

    if (!user) {
        return {
            error: "You are not authorized to perform this action"
        };
    }

    console.log("hitted here")


    if (!process.env.UPLOADTHING_SECRET) {
        return {
            error:
                "Missing UPLOADTHING_SECRET token.",
        };
    }

    console.log("formdata", formData)





    try {
        console.log("saving to prisma")
        let response;
        // Create new work experience
        response = await clientPrisma.work.create({
            data: {
                company: formData.get('company') as string,
                title: formData.get('title') as string,
                description: formData.get('description') as string,
                start: formData.get('start') as string,
                end: formData.get('end') as string,
                userId: user.user?.id ?? '',
                logoUrl: "",
                href: formData.get('href') as string,

            },
        });

        return response;
    } catch (error: any) {
        if (error.code === "P2002") {
            return {
                error: "This work experience entry already exists",
            };
        } else {
            return {
                error: error.message,
            };
        }
    }
}