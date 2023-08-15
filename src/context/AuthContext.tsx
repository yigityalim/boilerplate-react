import React, { createContext } from 'react'

interface AuthContextValue {
    test: string
}
export const AuthContext: React.Context<AuthContextValue> = createContext<AuthContextValue>({} as AuthContextValue)

export function AuthContextProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
    const value: AuthContextValue = {
        test: 'test',
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext(): AuthContextValue {
    return React.useContext(AuthContext)
}
