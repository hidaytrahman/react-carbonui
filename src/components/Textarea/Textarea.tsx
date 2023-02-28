import React, { forwardRef } from "react";
import { InputContainer } from "./Textarea.styles";
import { TextareaProps } from "./types";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
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

export default Textarea;
