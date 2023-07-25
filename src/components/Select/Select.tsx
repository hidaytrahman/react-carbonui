import React, { forwardRef } from 'react';
import { SelectContainer } from './Select.styles';
import { SelectProps } from './types';

const Select = forwardRef<HTMLSelectElement, SelectProps>(
	({ variant = 'primary', scale = 'regular', fullWidth = false, ...props }, ref) => {
		return <SelectContainer variant={variant} scale={scale} fullWidth={fullWidth} ref={ref} {...props} />;
	}
);

export default Select;
