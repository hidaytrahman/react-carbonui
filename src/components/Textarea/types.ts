export type TextareaVariant =
  | "primary"
  | "secondary"
  | "link"
  | "danger"
  | "warning";

export type TextareaSize = "small" | "regular" | "large" | "xlarge";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: TextareaVariant;
  scale?: TextareaSize;
  fullWidth?: boolean;
}
