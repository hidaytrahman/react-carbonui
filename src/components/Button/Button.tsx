import React, { forwardRef } from "react";
import { ButtonContainer } from "./Button.styles";
import { ButtonProps } from "./types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { label, variant = "primary", size = "regular", children, ...props },
    ref
  ) => {
    return (
      <ButtonContainer variant={variant} size={size} ref={ref} {...props}>
        {children ? children : label}
      </ButtonContainer>
    );
  }
);

export default Button;
