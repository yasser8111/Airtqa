import React from "react";

const SectionTitle = ({ children, className = "", ...props }) => {
  return (
    <h1
      className={`relative px-6 py-2 font-medium transition-all duration-200 cursor-pointer ${className}`}
      {...props}
    >
      <span className="absolute inset-0 bg-blue"></span>
      {children}
    </h1>
  );
};

export default SectionTitle;
