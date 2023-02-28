import styled from "styled-components";
import { TextareaSize, TextareaVariant } from "./types";

interface ButtonContainerTypes {
  variant: TextareaVariant;
  scale: TextareaSize;
  fullWidth: boolean;
}

export const InputContainer = styled.textarea<ButtonContainerTypes>`
  padding: 8px 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 5px;

  ${({ variant }) =>
    variant === "primary"
      ? `border: 2px solid #D9E4DD;`
      : variant === "secondary"
      ? `border: 2px solid #FBF7F0;`
      : variant === "danger"
      ? `border: 2px solid red;`
      : variant === "warning"
      ? `border: 2px solid yellow;`
      : `border: 2px solid #c3c3c3;`};

  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  ${({ scale }) =>
    scale === "xlarge"
      ? `font-size: 22px;`
      : scale === "large"
      ? `font-size: 18px;`
      : scale === "small"
      ? `font-size: 12px;`
      : `font-size: 14px;`};
`;
