// import React from 'react'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Tasks } from '@/components/Tasks';

export const App = () => {
    const { t, i18n } = useTranslation();

    // To change the language, use the following line.
    // i18n.changeLanguage('en');

    useEffect(() => {
        console.log(t('hello_world'));
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
