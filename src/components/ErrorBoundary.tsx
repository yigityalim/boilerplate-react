import { useRouteError } from 'react-router-dom'

export function ErrorBoundary() {
    const error = useRouteError()
    console.log('error', error)
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Error</h1>
                <p className='text-xl'>{error?.message}</p>
            </div>
        </div>
    )
}
