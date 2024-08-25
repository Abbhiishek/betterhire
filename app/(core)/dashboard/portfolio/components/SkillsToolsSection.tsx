import SkillForm from "@/components/Dashboard/form/skill";
import { auth } from "@/lib/auth";
import { clientPrisma } from "@/lib/prisma";


export default async function SkillsToolsSection() {

    const user = await auth();
    if (!user?.user?.id) {
        return ("/")
    }

    const U = await clientPrisma.user.findUnique({
        where: {
            id: user.user.id
        },
        select: {
            skills: true
        }
    })

    return (
        <div className="flex flex-col">
            <SkillForm data={U?.skills!} />
            {/* <ToolForm slug={siteId} data={masterdata[1]} alltechstack={masterdata[2]} /> */}
        </div>
    )
}

