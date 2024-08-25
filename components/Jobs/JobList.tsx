// import { Job } from '@/data/job'
import React, { ComponentProps, useState } from 'react'
import { Badge } from '../ui/badge'
import { ScrollArea } from '../ui/scroll-area'
import { formatDistanceToNow } from "date-fns/formatDistanceToNow"
import { cn } from '@/lib/utils'
import { BriefcaseBusinessIcon } from 'lucide-react'
import { Job } from '@prisma/client'
import { JobWithRelations } from './JobFeed'

interface JobListProps {
    items: JobWithRelations[];
    setSelectedJob: (job: JobWithRelations) => void
}


function JobList({ items, setSelectedJob }: JobListProps) {
    const [job, setJob] = useState<JobWithRelations>(items[0])




    return (
        <ScrollArea className="h-[750px]">
            <div className="flex flex-col gap-2 p-4 pt-0">
                {items.map((item) => (
                    <button
                        key={item.id}
                        className={cn(
                            "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
                            job.id === item.id && "bg-muted"
                        )}
                        onClick={() => {
                            setJob((prev) =>
                                prev.id === item.id ? items[0] : item
                            )
                            setSelectedJob(item)
                        }}
                    >
                        <div className='flex flex-row justify-start gap-4 w-full'>
                            <BriefcaseBusinessIcon size={35} />
                            <div className='flex flex-col flex-1'>
                                <div className="flex w-full flex-col gap-1">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="font-semibold">{item.title}</div>
                                            <Badge variant="outline">{item.type}</Badge>
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            {formatDistanceToNow(new Date(item.postedDate), {
                                                addSuffix: true,
                                            })}
                                        </div>
                                    </div>
                                    <div className="text-xs font-medium">{item.company.name}</div>
                                    <div className="text-xs text-muted-foreground">{item.location}</div>
                                </div>
                                <div className="line-clamp-2 text-xs text-muted-foreground mt-2">
                                    {item.description.substring(0, 150)}...
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <Badge variant="secondary">{item.salary}</Badge>
                                    <Badge variant="secondary">{item.experienceLevel}</Badge>
                                </div>
                                {item.skills.length > 0 && (
                                    <div className="flex items-center gap-2 mt-2 flex-wrap">
                                        {item.skills.slice(0, 3).map((skill: string) => (
                                            <Badge key={skill} variant="outline" className="text-xs">
                                                {skill}
                                            </Badge>
                                        ))}
                                        {item.skills.length > 3 && (
                                            <Badge variant="outline" className="text-xs">
                                                +{item.skills.length - 3} more
                                            </Badge>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </ScrollArea>
    )
}


function getBadgeVariantFromLabel(
    label: string
): ComponentProps<typeof Badge>["variant"] {
    if (["work"].includes(label.toLowerCase())) {
        return "default"
    }

    if (["personal"].includes(label.toLowerCase())) {
        return "outline"
    }

    if (["remote"].includes(label.toLowerCase())) {
        return "default"
    }

    return "secondary"
}


export default JobList