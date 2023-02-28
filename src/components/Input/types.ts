export type InputVariant =
  | "primary"
  | "secondary"
  | "link"
  | "danger"
  | "warning";

export type InputSize = "small" | "regular" | "large" | "xlarge";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
  scale?: InputSize;
  fullWidth?: boolean;
}
