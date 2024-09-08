import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "Primary" | "secondary"; // Fixed the typo
}

const Button: React.FC<ButtonProps> = ({
  variant = "Primary", // Default to 'Primary'
  children, // Fixed syntax error by removing colon
  className = "",
  ...props
}) => {
  const baseStyles = "text-black-100 h m-3"; // Fixed any potential CSS classes
  const variantStyles = {
    Primary:
      "hover:text-white bg-btn-orange hover:scale-95 hover:bg-btn-yellow hover:text-white-200 transition-transform duration-1000 p-3 rounded-full",
    secondary:
      "hover:text-white-200 bg-btn-red hover:scale-95 hover:bg-btn-yellow p-3 rounded-full",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`} // Fixed concatenation
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
