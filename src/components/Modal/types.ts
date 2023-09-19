import { ReactNode } from 'react';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	isOpen: boolean;
	confirmTitle?: string;
	cancelTitle?: string;
	onConfirm: () => void;
	onCancel?: () => void;
	hasCloseButton?: boolean;
	children?: ReactNode;
}
