import { JSX } from 'react'
import { cn } from '@/lib/utils'
import { Navigate, Outlet } from 'react-router-dom'

type Props = { className?: string }

export function AuthLayout({ className }: Props): JSX.Element {
    const isAuthenticated = false

    if (isAuthenticated) return <Navigate to='/admin' />

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
