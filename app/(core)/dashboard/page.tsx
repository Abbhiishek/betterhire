import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { BriefcaseIcon, CalendarIcon, EyeIcon } from 'lucide-react';
import { Metadata } from 'next'
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import ResumeUploader from '@/components/Dashboard/ResumeUploader';
import { clientPrisma } from '@/lib/prisma';

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'View your job search analytics and progress',
    openGraph: {
        title: 'Dashboard',
        description: 'View your job search analytics and progress',
        images: [
            {
                url: '/dashboard.png',
                width: 1200,
                height: 630,
                alt: 'Dashboard Preview',
            },
        ],
    },
}

async function Dashboard() {

    const session = await auth()
    if (!session) {
        redirect('/login')
    }
    const user = await clientPrisma.user.findUnique({
        where: {
            id: session.user?.id
        }
    })
    return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <ResumeUploader />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
                        <EyeIcon className="w-4 h-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12,345</div>
                        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Job Applications</CardTitle>
                        <BriefcaseIcon className="w-4 h-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">234</div>
                        <p className="text-xs text-muted-foreground">+15.2% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">First Round Interviews</CardTitle>
                        <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">87</div>
                        <p className="text-xs text-muted-foreground">+8.3% from last month</p>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}


export default Dashboard