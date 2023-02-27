import styled from "styled-components";
import { ButtonSize, ButtonVariant } from "./types";

interface ButtonContainerTypes {
  variant: ButtonVariant;
  size: ButtonSize;
}

export const ButtonContainer = styled.button<ButtonContainerTypes>`
  padding: 8px 10px;
  border: 0;
  cursor: pointer;
  border-radius: 5px;

  ${({ variant }) =>
    variant === "primary"
      ? `background: #D9E4DD;`
      : variant === "secondary"
      ? `background: #FBF7F0;`
      : variant === "danger"
      ? `background: red;`
      : variant === "warning"
      ? `background: yellow;`
      : variant === "link"
      ? `background: transparent;`
      : `color: #000;`};

  ${({ size }) =>
    size === "xlarge"
      ? `font-size: 22px; padding: 12px 20px;`
      : size === "large"
      ? `font-size: 18px;  padding: 10px 18px;`
      : size === "small"
      ? `font-size: 12px;`
      : size === "xsmall"
      ? `font-size: 10px;`
      : `font-size: 14px;`};
`;
