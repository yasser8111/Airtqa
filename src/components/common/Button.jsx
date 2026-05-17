import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "normal",
  className = "",
  ...props
}) => {
  const variants = {
    primary: "bg-blue text-white hover:opacity-90",
    secondary: "bg-gold text-dark hover:opacity-90",
    outline: "bg-transparent text-blue/50 border-2 border-blue/50 hover:bg-blue/5",
    link: "bg-transparent text-blue/50 hover:underline hover:text-gold transition-none",
  };

  const sizes = {
    normal: "px-6 py-2 text-base",
    large: "px-8 py-2.5 md:px-8 md:py-3 text-lg",
  };

  return (
    <button
      className={`font-medium transition-all duration-200 cursor-pointer rounded-md flex items-center justify-center ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
