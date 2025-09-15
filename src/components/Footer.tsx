// import React from 'react'
import { getTranslation } from '@/utils/translations';

export const Footer = () => {
    const translations = getTranslation();
    return (
        <div>
            <footer className='bg-blue-600 text-white p-4 text-center shadow-md mt-4'>
                <p className='text-sm'>
                    &copy; 2025 {translations.appTitle} by krelk.{' '}
                    {translations.reservedRights}
                </p>
            </footer>
        </div>
    );
};
