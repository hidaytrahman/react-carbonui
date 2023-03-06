import { ReactNode } from "react";

export type AlertVariant =
  | "primary"
  | "secondary"
  | "success"
  | "link"
  | "danger"
  | "warning";

export type AlertSize = "xsmall" | "small" | "regular" | "large" | "xlarge";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
  variant?: AlertVariant;
  size?: AlertSize;
  children?: ReactNode;
}
