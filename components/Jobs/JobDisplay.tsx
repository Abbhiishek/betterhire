import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Separator } from '../ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
// import { Job } from '@/data/job'
import { format } from 'date-fns'
import { Badge } from '../ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { MapPin, Briefcase, DollarSign, Calendar } from 'lucide-react'
import { ScrollArea } from '../ui/scroll-area'
import Image from 'next/image'
import { User } from 'lucide-react'
import { TypographyList } from '../ui/typography'
import { Job } from '@prisma/client'
import { JobWithRelations } from './JobFeed'

interface JobDisplayProps {
    job: JobWithRelations | null
}

function JobDisplay({ job }: JobDisplayProps) {
    if (!job) {
        return (
            <div className="flex h-full items-center justify-center">
                <p className="text-center text-muted-foreground">No job selected</p>
            </div>
        )
    }

    return (
        <ScrollArea className="h-full">
            <div className="flex flex-col space-y-4 p-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Avatar className="h-12 w-12">
                                <AvatarImage src={job.company.logo} alt={job.title} />
                                <AvatarFallback>
                                    {job.company.name.split(" ").map((chunk) => chunk[0]).join("")}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-lg">{job.title}</CardTitle>
                                <p className="text-sm text-muted-foreground">{job.company.name} • {job.location}</p>
                                <p className="text-xs text-muted-foreground">{job.category}</p>
                            </div>
                        </div>
                        {job.postedDate && (
                            <p className="text-xs text-muted-foreground">
                                Posted {format(new Date(job.postedDate), "MMM d, yyyy")}
                            </p>
                        )}
                    </CardHeader>
                </Card>

                <Card>
                    <CardContent className="grid grid-cols-2 gap-4 pt-4">
                        <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{job.location || 'Location not specified'}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Briefcase className="h-4 w-4 text-muted-foreground" />
                            <span>{job.type || 'Job type not specified'}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                            <span>{job.salary || 'Salary not specified'}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{job.applicationDeadline ? format(new Date(job.applicationDeadline), "PPP") : 'No deadline specified'}</span>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Job Description</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ReactMarkdown className="text-sm prose dark:prose-invert">
                            {job.description}
                        </ReactMarkdown>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Required Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <TypographyList>
                            {job.requirements?.map((requirement, index) => (
                                <li key={index}>{requirement}</li>
                            )) || <li>No specific requirements mentioned</li>}
                        </TypographyList>
                    </CardContent>
                </Card>

                {/* <Card>
                    <CardHeader>
                        <CardTitle>Compensation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <p><strong>Base Salary:</strong> {job.compensation?.base || 'Not specified'}</p>
                            <p><strong>Bonus:</strong> {job.compensation?.bonus || 'Not specified'}</p>
                            <p><strong>Equity:</strong> {job.compensation?.equity || 'Not specified'}</p>
                            <p><strong>Benefits:</strong> {job.compensation?.benefits?.join(', ') || 'Not specified'}</p>
                        </div>
                    </CardContent>
                </Card> */}

                <Card>
                    <CardHeader>
                        <CardTitle>Hiring Manager</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                {job.hiringManager?.image ? (
                                    <Image
                                        src={job.hiringManager.image || ''}
                                        alt={job.hiringManager.name || 'Hiring Manager'}
                                        width={64}
                                        height={64}
                                        className="rounded-full"
                                    />
                                ) : (
                                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                                        <User className="h-8 w-8 text-gray-500" />
                                    </div>
                                )}
                            </div>
                            <div className="space-y-2">
                                <p><strong>Name:</strong> {job.hiringManager?.name || 'Not specified'}</p>
                                <p><strong>Title:</strong> {job.hiringManager?.shortbio || 'Not specified'}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </ScrollArea>
    )
}

export default JobDisplay