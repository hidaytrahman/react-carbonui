import React, { forwardRef } from "react";
import { InputContainer } from "./Input.styles";
import { InputProps } from "./types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { variant = "primary", scale = "regular", fullWidth = false, ...props },
    ref
  ) => {
    return (
      <InputContainer
        variant={variant}
        scale={scale}
        fullWidth={fullWidth}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Input;
