export interface ModalProps {
    type: 'complete' | 'delete';
    name: string;
    isOpen: boolean;
    onClose: () => void;
    onConfirm?: () => void;
}