import React from "react";
import { ButtonContainer } from "./Button.styles";
import { ButtonProps } from "./types";

const Button = ({
  label,
  variant = "primary",
  size = "regular",
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer variant={variant} size={size} {...props}>
      {label}
    </ButtonContainer>
  );
};

export default Button;
