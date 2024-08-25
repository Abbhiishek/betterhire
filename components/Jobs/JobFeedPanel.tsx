"use client";

import React from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../ui/resizable'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Separator } from '../ui/separator'
import { Search } from 'lucide-react'
import { Input } from '../ui/input'
import JobList from './JobList'
import JobDisplay from './JobDisplay'
// import { Job } from '@/data/job'
import { TypographyH1, TypographyH3 } from '../ui/typography';
import { Job } from '@prisma/client';
import { JobWithRelations } from './JobFeed';

interface JobsProps {
    jobs: JobWithRelations[];
    defaultLayout: number[] | undefined
}

function JobFeedPanel({
    jobs,
    defaultLayout = [32, 48],
}: JobsProps) {

    const [selectedJob, setSelectedJob] = React.useState(jobs[0])
    const [searchQuery, setSearchQuery] = React.useState('')
    const [filteredJobs, setFilteredJobs] = React.useState<JobWithRelations[]>(jobs)

    const onSearchChange = async (query: string) => {
        setSearchQuery(query);
        try {
            const response = await fetch(`/api/job?searchQuery=${query}`);
            const data = await response.json();
            setFilteredJobs(data);
        } catch (error) {
            console.error('Failed to fetch jobs:', error);
        }
    }

    return (
        <div className="flex flex-col lg:flex-row h-full w-full">
            <ResizablePanelGroup
                direction="horizontal"
                onLayout={(sizes: number[]) => {
                    document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
                        sizes
                    )}`
                }}
                className="hidden lg:flex h-full w-full"
            >
                <ResizablePanel defaultSize={defaultLayout[0]} minSize={40}>
                    <Tabs defaultValue="all" className="h-full">
                        <div className="flex items-center px-4 py-2">
                            <TypographyH3 className="text-xl font-bold">Explore Jobs</TypographyH3>
                            <TabsList className="ml-auto">
                                <TabsTrigger
                                    value="all"
                                    className="text-zinc-600 dark:text-zinc-200"
                                >
                                    All Jobs
                                </TabsTrigger>
                                <TabsTrigger
                                    value="unread"
                                    className="text-zinc-600 dark:text-zinc-200"
                                >
                                    Applied Jobs
                                </TabsTrigger>
                            </TabsList>
                        </div>
                        <Separator />
                        <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                onSearchChange(searchQuery);
                            }}>
                                <div className="relative">
                                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Search"
                                        className="pl-8"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                            </form>
                        </div>
                        <TabsContent value="all" className="m-0 overflow-auto">
                            <JobList items={filteredJobs} setSelectedJob={setSelectedJob} />
                        </TabsContent>
                        <TabsContent value="unread" className="m-0 overflow-auto lg:flex-grow">
                            <JobList items={filteredJobs} setSelectedJob={setSelectedJob} />
                        </TabsContent>
                    </Tabs>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
                    <JobDisplay
                        job={selectedJob}
                    />
                </ResizablePanel>
            </ResizablePanelGroup>
            <div className="lg:hidden flex flex-col h-full">
                <Tabs defaultValue="all" className="flex-grow">
                    <div className="flex items-center px-4 py-2">
                        <TypographyH3 className="text-xl font-bold">Explore Jobs</TypographyH3>
                        <TabsList className="ml-auto">
                            <TabsTrigger
                                value="all"
                                className="text-zinc-600 dark:text-zinc-200"
                            >
                                All Jobs
                            </TabsTrigger>
                            <TabsTrigger
                                value="unread"
                                className="text-zinc-600 dark:text-zinc-200"
                            >
                                Applied Jobs
                            </TabsTrigger>
                        </TabsList>
                    </div>
                    <Separator />
                    <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                        <form>
                            <div className="relative">
                                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input placeholder="Search" className="pl-8" />
                            </div>
                        </form>
                    </div>
                    <TabsContent value="all" className="m-0 overflow-y-scroll h-1/2">
                        <JobList items={jobs} setSelectedJob={setSelectedJob} />
                    </TabsContent>
                    <TabsContent value="unread" className="m-0 overflow-auto h-1/2">
                        <JobList items={jobs} setSelectedJob={setSelectedJob} />
                    </TabsContent>
                </Tabs>
                <div className="h-1/2 overflow-auto">
                    <JobDisplay
                        job={selectedJob}
                    />
                </div>
            </div>
        </div>
    )
}

export default JobFeedPanel