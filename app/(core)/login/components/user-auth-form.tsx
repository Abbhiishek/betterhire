"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
import { auth } from "@/lib/auth"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }


export function UserAuthForm({ className, ...props }: UserAuthFormProps) {

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <Button variant="outline" type="button"
                onClick={() => signIn(
                    "github",
                    { redirectTo: "/" }
                )}
            >
                <Icons.github className="mr-2 h-4 w-4" />
                GitHub
            </Button>
        </div >
    )
}
