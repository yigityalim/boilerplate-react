import ReactDOM from 'react-dom/client'
import './index.css'
import './i18n.ts'
import { Trans } from 'react-i18next'
import routes from '@/Routes'
import { Loader } from '@/components'
import { QueryClient, QueryClientProvider } from 'react-query'

// context
import { AppContextProvider, AuthContextProvider, AdminContextProvider, LanguageContextProvider } from '@/context'
import { ThemeProvider } from '@/components/theme-provider'
import { RouterProvider } from 'react-router-dom'

const queryClient: QueryClient = new QueryClient()
const root: HTMLDivElement | HTMLElement = document.getElementById('root') ?? document.body

ReactDOM.createRoot(root).render(
    <QueryClientProvider client={queryClient}>
        <LanguageContextProvider>
            <ThemeProvider defaultTheme='system' storageKey='ui-theme'>
                <Trans>
                    <AppContextProvider>
                        <AuthContextProvider>
                            <AdminContextProvider>
                                <RouterProvider fallbackElement={<Loader />} router={routes} />
                            </AdminContextProvider>
                        </AuthContextProvider>
                    </AppContextProvider>
                </Trans>
            </ThemeProvider>
        </LanguageContextProvider>
    </QueryClientProvider>
)
