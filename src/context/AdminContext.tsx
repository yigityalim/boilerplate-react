import React, { createContext } from 'react'

interface AdminContextValue {
    test: string
}
export const AdminContext: React.Context<AdminContextValue> = createContext<AdminContextValue>({} as AdminContextValue)

export function AdminContextProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
    const value: AdminContextValue = {
        test: 'test',
    }
    return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
}

export function useAdminContext(): AdminContextValue {
    return React.useContext(AdminContext)
}
