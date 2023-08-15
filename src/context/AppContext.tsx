import React, { createContext } from 'react'

interface AppContextValue {
    test: string
}
export const AppContext: React.Context<AppContextValue> = createContext<AppContextValue>({} as AppContextValue)

export function AppContextProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
    const value: AppContextValue = {
        test: 'test',
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useAppContext(): AppContextValue {
    return React.useContext(AppContext)
}
