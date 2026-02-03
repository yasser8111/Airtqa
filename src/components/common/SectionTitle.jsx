import React from "react";

const SectionTitle = ({ children, className = "", ...props }) => {
  return (
    <div className="relative inline-block mb-10">
      <span className="absolute -right-10 -top-5 w-14 h-14 bg-gold rounded-full z-0" />
      <h2
        className={`relative z-10 text-3xl md:text-4xl font-bold text-blue ${className}`}
        {...props}
      >
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;