import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Tasks } from '@/components/Tasks';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const App = () => {
    // Hook de i18n
    const { i18n } = useTranslation();
    
    // Automáticamente se cambia el idioma del navegador / móvil
    useEffect(() => {
        const userLang = navigator.language || (navigator as any).userLanguage; // 'en-US', 'es-ES', etc.
        const langCode = userLang.split('-')[0]; // Obtener solo el código del idioma, por ejemplo, 'en' o 'es'
        document.documentElement.lang = langCode;

        // Obtenemos el idioma actual del navegador / móvil
        const currentLang = i18n.language;

        // Si el idioma del navegador es diferente al actual, cambiamos el idioma
        if (langCode !== currentLang) {
            i18n.changeLanguage(langCode);
        }
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
