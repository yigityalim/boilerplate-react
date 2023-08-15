import React, { createContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import type { i18n, t } from 'i18next'

interface LanguageContextValue {
    t: t
    i18n: i18n
    language: 'tr' | 'en' | 'de' | 'es' | 'ru' | 'ar'
    changeLanguage: (language: 'tr' | 'en' | 'de' | 'es' | 'ru' | 'ar') => void
    ltr: boolean
}
export const LanguageContext: React.Context<LanguageContextValue> = createContext<LanguageContextValue>({
    language: 'tr',
    changeLanguage: () => {},
    ltr: true,
} as LanguageContextValue)

export function LanguageContextProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
    const { t, i18n } = useTranslation()

    useEffect(() => {
        if (i18n.language === 'ar') document.documentElement.dir = 'rtl'
        else document.documentElement.dir = 'ltr'
    }, [i18n.language])

    const value: LanguageContextValue = {
        t,
        i18n,
        language: i18n.language as 'tr' | 'en' | 'de' | 'es' | 'ru' | 'ar',
        changeLanguage: (language: 'tr' | 'en' | 'de' | 'es' | 'ru' | 'ar') => i18n.changeLanguage(language),
        ltr: i18n.language !== 'ar',
    }
    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguageContext(): AdminContextValue {
    return React.useContext(LanguageContext)
}
