import { ReactNode } from 'react';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
	title?: string;
	confirmTitle?: string;
	cancelTitle?: string;
	onConfirm: () => void;
	onCancel?: () => void;
	closeX: boolean;
	children?: ReactNode;
}
