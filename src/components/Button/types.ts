import { ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "link"
  | "danger"
  | "warning";

export type ButtonSize = "xsmall" | "small" | "regular" | "large" | "xlarge";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: ReactNode;
}
