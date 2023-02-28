import React from "react";
import { ButtonContainer } from "./Button.styles";
import { ButtonProps } from "./types";

const Button = ({
  label,
  variant = "primary",
  size = "regular",
  children,
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer variant={variant} size={size} {...props}>
      {children ? children : label}
    </ButtonContainer>
  );
};

export default Button;
