import React from 'react'
import { cn } from '@/lib/utils'

export function Loader({ fullHeight = false }: { fullHeight?: boolean }): React.JSX.Element {
    return (
        <div className={cn('w-full h-full flex items-center justify-center', fullHeight && 'h-screen')}>
            <span className="after:rounded-full rounded-full w-[200px] h-2 inline-block relative bg-primary-dark dark:bg-wash-dark overflow-hidden after:content-[''] after:w-1/2 after:h-full after:bg-primary dark:after:bg-wash after:absolute after:top-0 after:left-0 after:box-border after:animate-loader" />
        </div>
    )
}
