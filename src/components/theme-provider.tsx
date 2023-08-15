import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect } from 'react'
import { useTernaryDarkMode } from '@/hooks/useTernaryDarkMode'

type ThemeProviderProps = {
    children: ReactNode
    defaultTheme?: 'light' | 'dark' | 'system'
    storageKey?: string
}

type ThemeProviderState = {
    theme: 'light' | 'dark' | 'system'
    setTheme: Dispatch<SetStateAction<'light' | 'dark' | 'system'>>
}

const initialState = {
    theme: 'system',
    setTheme: () => {},
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
    children,
    defaultTheme = 'system',
    storageKey = 'ui-theme',
    ...props
}: ThemeProviderProps) {
    const { isDarkMode, ternaryDarkMode, setTernaryDarkMode } = useTernaryDarkMode(defaultTheme, storageKey)

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.toggle('dark', isDarkMode)
    }, [isDarkMode])

    const value = {
        theme: ternaryDarkMode,
        setTheme: setTernaryDarkMode,
    }

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)

    if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider')

    return context
}
