import React, { type ReactNode } from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  icon?: ReactNode;
  variant?: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  icon,
  variant = "primary",
}) => {
  const baseClass =
    "px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors";
  const variantClass =
    variant === "primary"
      ? "bg-blue-600 hover:bg-blue-700 text-white"
      : "bg-white hover:bg-gray-50 text-gray-800 border border-gray-300";

  return (
    <button className={`${baseClass} ${variantClass}`} onClick={onClick}>
      {text}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
