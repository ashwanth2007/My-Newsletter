import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`w-full sm:w-auto bg-[#DC2626] hover:bg-[#B91C1C] text-white font-[700] text-lg py-3 px-10 rounded-lg transition-colors shadow-md active:scale-[0.99] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};