"use client";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet"
import { Boxes, CircleUser, LayoutDashboard, LogOutIcon, MenuIcon, Rss, SettingsIcon } from "lucide-react";
import { TypographyLarge } from "../ui/typography";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useParams, useSelectedLayoutSegments } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

function SideDashboardNavBar() {
    return (
        <>
            <div className="flex-col hidden h-screen gap-5 mb-10 lg:flex basis-1/5">
                <NavBarOptions />
            </div>
            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline">
                            <MenuIcon className="w-5 h-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side={"left"}
                    >
                        <SheetHeader>
                            <SheetTitle>
                                <TypographyLarge>BetterHire</TypographyLarge>
                            </SheetTitle>
                        </SheetHeader>
                        <ScrollArea className="h-full px-1">
                            <div className="grid gap-4 py-4">
                                <NavBarOptions />
                            </div>
                        </ScrollArea>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}


const NavBarOptions = () => {
    const segments = useSelectedLayoutSegments();;



    const tabs = useMemo(() => {
        // if (segments[0] === "portfolio" && slug && segments[2] === "blog" && blogslug) {
        //     return [
        //         {
        //             name: "Back to All Post",
        //             icon: <ArrowLeft width={18} />,
        //             Link: `/dashboard/portfolio/${slug}/blog`,
        //             urlname: "dashboard"
        //         },
        //         {
        //             name: "Editor",
        //             Link: `/dashboard/portfolio/${slug}/blog/${blogslug}`,
        //             isActive: segments.length === 4,
        //             icon: <Edit3 width={18} />,
        //         },
        //         {
        //             name: "Settings",
        //             Link: `/dashboard/portfolio/${slug}/blog/${blogslug}/settings`,
        //             isActive: segments.includes("settings"),
        //             icon: <Settings width={18} />,
        //         },

        //     ]
        // }
        return [
            {
                name: "Overview",
                Link: "/dashboard",
                urlname: "dashboard",
                isActive: segments.length === 0,
                icon: <LayoutDashboard className="w-5 h-5" />,
            },
            {
                name: "Portfolio",
                Link: "/dashboard/portfolio",
                urlname: "portfolio",
                isActive: segments[0] === "portfolio",
                icon: <CircleUser className="w-5 h-5" />,
            },
            {
                name: "Applied Jobs",
                Link: "/dashboard/jobs",
                urlname: "jobs",
                isActive: segments[0] === "jobs",
                icon: <SettingsIcon className="w-5 h-5" />,
            },
            {
                name: "Explore",
                Link: "/community",
                urlname: "community",
                isActive: segments[0] === "community",
                icon: <Boxes className="w-5 h-5" />,
            },

        ];
    }, [segments])



    return (
        <div className="flex flex-col items-start justify-center gap-5">
            {
                tabs.map((nav, index) => (
                    <Link key={index} href={nav.Link} className="w-full">
                        <Button key={index}
                            variant={nav.isActive ? "default" : "outline"}
                            className={`flex items-center justify-start w-full gap-2  rounded-3xl`}>
                            {nav.icon}
                            <span>{nav.name}</span>
                        </Button>
                    </Link>
                ))
            }
            <Button variant="outline"
                className={`flex items-center justify-start w-full gap-2 rounded-3xl text-red-500 hover:text-red-600 border-red-500 hover:border-red-600 dark:hover:bg-red-500/40 `}
                onClick={() => {
                    signOut()
                }}>
                <LogOutIcon className="w-5 h-5" />
                <span>Logout</span>
            </Button>
        </div>
    )
}

export default SideDashboardNavBar