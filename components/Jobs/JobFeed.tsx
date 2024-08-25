import { cookies } from "next/headers"
import JobFeedPanel from "./JobFeedPanel"
import { clientPrisma } from "@/lib/prisma"
import { Prisma } from "@prisma/client"

export type JobWithRelations = Prisma.JobGetPayload<{
    include: {
        company: true,
        hiringManager: true
    }
}>;


async function JobFeed() {

    const layout = cookies().get("react-resizable-panels:layout:mail")
    const defaultLayout = layout ? JSON.parse(layout.value) : undefined




    const jobs: JobWithRelations[] = await clientPrisma.job.findMany({
        include: {
            company: true,
            hiringManager: true
        }
    });

    return (
        <JobFeedPanel
            jobs={jobs}
            defaultLayout={defaultLayout}
        />
    )
}

export default JobFeed