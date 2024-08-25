import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'
import { DashboardIcon } from '@radix-ui/react-icons'
import { auth } from '@/lib/auth'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const ActiveUserProfile = async () => {
    let session = await auth();

    return (
        <Avatar className='w-7 h-7'>
            <AvatarImage
                src={session?.user?.image || "https://github.com/shadcn.png"} alt="@shadcn" />
            <AvatarFallback>{session?.user?.name?.charAt(0)}</AvatarFallback>
        </Avatar>

    )
}

export default ActiveUserProfile