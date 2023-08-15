import { Moon, Sun, Monitor } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useTheme } from '@/components/theme-provider'
import { cn } from '@/lib/utils.ts'
import { useLanguageContext } from '@/context'

export function ThemeSwitch({ className }: { className?: string }) {
    const { setTheme, theme } = useTheme()
    const { t } = useLanguageContext()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' size='icon' className={cn('w-12', className)}>
                    {theme === 'system' ? (
                        <Monitor className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all' />
                    ) : theme === 'light' ? (
                        <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                    ) : (
                        <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                    )}
                    <span className='sr-only'>Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={() => setTheme('light')} className='cursor-pointer'>
                    <Sun className='h-[1.2rem] w-[1.2rem] mr-2' />
                    {t('lightMode')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')} className='cursor-pointer'>
                    <Moon className='h-[1.2rem] w-[1.2rem] mr-2' />
                    {t('darkMode')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')} className='cursor-pointer'>
                    <Monitor className='h-[1.2rem] w-[1.2rem] mr-2' />
                    {t('systemMode')}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
