import styled from 'styled-components';
import { SelectSize, SelectVariant } from './types';
import { theme } from '../utils/colors';

interface ButtonContainerTypes {
	variant: SelectVariant;
	scale: SelectSize;
	fullWidth: boolean;
}

export const SelectContainer = styled.select<ButtonContainerTypes>`
	padding: 8px 10px;
	box-sizing: border-box;
	border: 0;
	border-radius: 5px;

	${({ variant }) =>
		variant === 'primary'
			? `border: 2px solid ${theme.colors.primary};`
			: variant === 'secondary'
			? `border: 2px solid ${theme.colors.secondary};`
			: variant === 'danger'
			? `border: 2px solid ${theme.colors.danger};`
			: variant === 'warning'
			? `border: 2px solid ${theme.colors.warning};`
			: `border: 2px solid ${theme.colors.grey};`};

	width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

	${({ scale }) =>
		scale === 'xlarge'
			? `font-size: 22px;`
			: scale === 'large'
			? `font-size: 18px;`
			: scale === 'small'
			? `font-size: 12px;`
			: `font-size: 14px;`};
`;
