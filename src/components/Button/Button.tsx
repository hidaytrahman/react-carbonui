import React from "react";
import { ButtonContainer } from "./Button.styles";
import { ButtonVariant } from "./types";

export interface ButtonProps {
  label: string;
  variant: ButtonVariant;
}

const Button = ({ label, variant = "primary", ...props }: ButtonProps) => {
  return (
    <ButtonContainer variant={variant} {...props}>
      {label}
    </ButtonContainer>
  );
};

export default Button;
