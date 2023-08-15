import React from 'react'

export function ForEach<T>({
    items,
    children,
    className,
}: {
    items: T[]
    children: (item: T, index: number) => React.ReactNode
    className?: string
}): React.ReactElement | null {
    return className ? (
        <div className={className}>
            {items.map((item: T, index: number) => {
                return children(item, index)
            })}
        </div>
    ) : (
        <>{items.map((item: T, index: number) => children(item, index))}</>
    )
}
