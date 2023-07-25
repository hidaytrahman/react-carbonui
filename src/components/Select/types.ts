export type SelectVariant = 'primary' | 'secondary' | 'link' | 'danger' | 'warning';

export type SelectSize = 'small' | 'regular' | 'large' | 'xlarge';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	variant?: SelectVariant;
	scale?: SelectSize;
	fullWidth?: boolean;
}
