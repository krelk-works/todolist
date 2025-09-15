import React from 'react';
import type { ModalProps } from '@/types/Modal';
import type { Translation } from '@/types/Translation';
import { getTranslation } from '@/utils/translations';

export const Modal = (props: ModalProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [type, setType] = React.useState<'complete' | 'delete'>('complete');
    const [translations, setTranslations] = React.useState<Translation>();

    // Sincroniza el estado interno con las props
    React.useEffect(() => {
        setIsOpen(props.isOpen);
        setType(props.type);
    }, [props.isOpen, props.type]);

    // Carga las traducciones al montar el componente
    React.useEffect(() => {
        const loadedTranslations = getTranslation();
        setTranslations(loadedTranslations);
    }, []);

    const onClose = () => {
        props.onClose();
    };

    const onConfirm = () => {
        props.onConfirm && props.onConfirm();
    };

    if (!isOpen) return null;
    return (
        // Gracias a la clase fixed y los valores inset-0, top-0, left-0, z-10, el modal se posiciona correctamente en el centro de la pantalla
        <div className='fixed inset-0 w-screen h-screen bg-black/50 flex items-center justify-center top-0 left-0 z-10 p-6 shadow-lg'>
            <div className='bg-white p-4 rounded shadow-md max-w-[90%]'>
                <h2 className='text-lg font-bold border-b border-gray-300 text-center pb-4'>
                    {type === 'complete'
                        ? translations?.modalCompleteTitle
                        : translations?.modalDeleteTitle}
                </h2>
                <p className='text-center py-2 text-sm text-gray-600 border-b border-gray-300'>
                    {' '}
                    {translations?.task}:{' '}
                    <span className='font-bold'>{props.name}</span>
                </p>
                <div className='flex justify-center items-center pt-4'>
                    <button
                        className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded mr-2 cursor-pointer transition-colors duration-300 w-16'
                        onClick={onClose}
                    >
                        {translations?.no}
                    </button>
                    <button
                        className='bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-2 rounded cursor-pointer transition-colors duration-300 w-16'
                        onClick={onConfirm}
                    >
                        {translations?.yes}
                    </button>
                </div>
            </div>
        </div>
    );
};
