import React from "react";
import "./button.scss";

export interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return <button className="btn">{label}</button>;
};

export default Button;
