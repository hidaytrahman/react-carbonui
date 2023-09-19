import React, { forwardRef, useState } from 'react';
import { ModalContainer, ModalContent } from './Modal.styles';
import { ModalProps } from './types';
import Button from '../Button';

const Modal = forwardRef<HTMLDivElement, ModalProps>(
	(
		{
			title,
			isOpen,
			onCancel,
			onConfirm,
			confirmTitle = 'Confirm',
			cancelTitle,
			hasCloseButton = false,
			children,
			...props
		},
		ref
	) => {
		const [open, setOpen] = useState(isOpen);

		const handleOnCancel = () => {
			setOpen(false);
			onCancel?.();
		};

		const handleOnConfirm = () => {
			onConfirm();
			setOpen(false);
		};

		return open ? (
			<ModalContainer ref={ref} {...props}>
				<ModalContent>
					<header>
						<div className='modal-title'>{title}</div>

						{hasCloseButton && (
							<Button variant='link' size='large' onClick={handleOnCancel}>
								x
							</Button>
						)}
					</header>
					<article>{children}</article>

					<footer>
						{cancelTitle && onCancel ? (
							<Button variant='secondary' onClick={handleOnCancel}>
								{cancelTitle}
							</Button>
						) : null}

						<Button onClick={handleOnConfirm}>{confirmTitle}</Button>
					</footer>
				</ModalContent>
			</ModalContainer>
		) : null;
	}
);

export default Modal;
