import { JSX } from 'react'
import { Button } from '@/components/ui/button'
import { useLanguageContext } from '@/context'
import { ThemeSwitch } from '@/components'
export default function Home(): JSX.Element {
    const { t, i18n, ltr } = useLanguageContext()

    if (!ltr)
        return (
            <>
                <h1>
                    <span className='text-red-500'>LTR</span> الصفحة الرئيسية
                </h1>
                <Button variant='outline' onClick={() => i18n.changeLanguage('tr')}>
                    اللغة التركية
                </Button>
            </>
        )

    return (
        <div className='w-full flex flex-col gap-y-4 items-center justify-center'>
            <h1 className='text-5xl font-bold text-black dark:text-white tracking-widest'>{t('homePageTitle')}</h1>
            <Button variant='outline' onClick={() => i18n.changeLanguage('tr')} className='w-48'>
                Türkçe
            </Button>
            <Button variant='outline' onClick={() => i18n.changeLanguage('en')} className='w-48'>
                English
            </Button>
            <Button variant='outline' onClick={() => i18n.changeLanguage('de')} className='w-48'>
                Deutsch
            </Button>
            <Button variant='outline' onClick={() => i18n.changeLanguage('fr')} className='w-48'>
                Français
            </Button>
            <Button variant='outline' onClick={() => i18n.changeLanguage('es')} className='w-48'>
                Español
            </Button>
            <Button variant='outline' onClick={() => i18n.changeLanguage('ru')} className='w-48'>
                Русский
            </Button>
            <Button variant='outline' onClick={() => i18n.changeLanguage('ar')} className='w-48'>
                عربي
            </Button>
            <ThemeSwitch className='' />
        </div>
    )
}
