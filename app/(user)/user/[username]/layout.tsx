import UserNavbar from "@/components/user/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { getUser } from "@/actions/user";
export const dynamic = "force-dynamic"


export async function generateMetadata({ params }: { params: { username: string } }) {
    const user = await getUser(params.username)
    if (!user) {
        return null;
    }
    return {
        title: user.name,
        description: user.shortbio,
        image: user.image,
        openGraph: {
            title: user.name,
            description: user.shortbio,
            image: user.image,
        },
        twitter: {
            title: user.name,
            description: user.shortbio,
            image: user.image,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        verification: {
            google: "",
            yandex: "",
        },
    }
}






export default async function UserRootLayout({
    params,
    children,
}: Readonly<{
    params: { username: string }
    children: React.ReactNode;
}>) {

    const user = await getUser(params.username)
    if (!user) {
        return null;
    }

    return (
        <div
            className={cn(
                "min-h-screen bg-background font-sans antialiased max-w-3xl mx-auto py-12 sm:py-24 px-6"
            )}
        >
            {children}
            {/* <UserNavbar /> */}
        </div>
    );
}
