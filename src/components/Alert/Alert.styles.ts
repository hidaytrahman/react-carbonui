import styled from 'styled-components';
import { AlertSize, AlertVariant } from './types';
import { theme } from '../utils/colors';

interface AlertContainerTypes {
	variant: AlertVariant;
	size: AlertSize;
}

export const AlertContainer = styled.div<AlertContainerTypes>`
	padding: 8px 10px;
	border: 0;
	border-radius: 5px;

	${({ variant }) =>
		variant === 'primary'
			? `background: ${theme.colors.primary};`
			: variant === 'secondary'
			? `background: ${theme.colors.secondary};`
			: variant === 'danger'
			? `background: ${theme.colors.danger}; color:${theme.colors.primaryContrast};`
			: variant === 'warning'
			? `background: ${theme.colors.warning};`
			: variant === 'success'
			? `background: ${theme.colors.success};`
			: `color: #000;`};

	${({ size }) =>
		size === 'xlarge'
			? `font-size: 22px; padding: 12px 20px;`
			: size === 'large'
			? `font-size: 18px;  padding: 10px 18px;`
			: size === 'small'
			? `font-size: 12px;`
			: size === 'xsmall'
			? `font-size: 10px;`
			: `font-size: 14px;`};
`;
