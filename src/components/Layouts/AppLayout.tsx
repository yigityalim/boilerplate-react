import { JSX } from 'react'
import { cn } from '@/lib/utils'
import { Outlet } from 'react-router-dom'

type Props = {
    className?: string
}

export function AppLayout({ className }: Props): JSX.Element {
    return (
        <main
            className={cn(
                'flex flex-col items-center justify-center w-full h-full p-4 bg-wash dark:bg-wash-dark',
                className
            )}
        >
            <Outlet />
        </main>
    )
}
