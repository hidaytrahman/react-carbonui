import React, { forwardRef } from "react";
import { AlertContainer } from "./Alert.styles";
import { AlertProps } from "./types";

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    { message, variant = "primary", size = "regular", children, ...props },
    ref
  ) => {
    return (
      <AlertContainer variant={variant} size={size} ref={ref} {...props}>
        {children ? children : message}
      </AlertContainer>
    );
  }
);

export default Alert;
