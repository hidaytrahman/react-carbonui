import styled from "styled-components";
import { ButtonVariant } from "./types";

interface ButtonContainerTypes {
  variant: ButtonVariant;
}

export const ButtonContainer = styled.button<ButtonContainerTypes>`
  padding: 1rem;
  background: green;

  ${({ variant }) => variant}
`;
