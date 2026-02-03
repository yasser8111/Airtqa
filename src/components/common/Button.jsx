import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const variants = {
    primary: "bg-blue text-white hover:opacity-90",
    secondary: "bg-gold text-dark hover:opacity-90",
  };

  return (
    <button
      className={`px-6 py-2 font-medium transition-all duration-200 cursor-pointer ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
