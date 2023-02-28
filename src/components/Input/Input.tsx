import React from "react";
import { InputContainer } from "./Input.styles";
import { InputProps } from "./types";

const Input = ({
  variant = "primary",
  scale,
  fullWidth,
  ...props
}: InputProps) => {
  return (
    <InputContainer
      variant={variant}
      scale={scale}
      fullWidth={fullWidth}
      {...props}
    />
  );
};

export default Input;
