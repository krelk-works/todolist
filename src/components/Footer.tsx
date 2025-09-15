import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <div>
            <footer className='bg-blue-600 text-white p-4 text-center shadow-md mt-4'>
                <p className='text-sm'>
                    &copy; 2025 {t('appTitle')} by krelk. {t('reservedRights')}
                </p>
            </footer>
        </div>
    );
};
