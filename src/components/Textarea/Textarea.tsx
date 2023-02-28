import React from "react";
import { InputContainer } from "./Textarea.styles";
import { TextareaProps } from "./types";

const Textarea = ({
  variant = "primary",
  scale = "regular",
  fullWidth = false,
  ...props
}: TextareaProps) => {
  return (
    <InputContainer
      variant={variant}
      scale={scale}
      fullWidth={fullWidth}
      {...props}
    />
  );
};

export default Textarea;
