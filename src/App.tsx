import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Tasks } from '@/components/Tasks';

export const App = () => {
    const { i18n } = useTranslation();

    const changeLanguageHandler = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    useEffect(() => {
        changeLanguageHandler('tr');
    }, []);

    return (
        <div className='min-h-screen min-w-screen flex flex-col'>
            {/* 100vh y columna */}
            <Header />
            <main className='flex-1'>
                {/* ocupa el hueco */}
                <Tasks />
            </main>
            <Footer />
        </div>
    );
};
