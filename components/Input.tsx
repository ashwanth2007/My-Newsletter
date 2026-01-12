import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      className={`w-full bg-[#F3F4F6] text-gray-900 placeholder-gray-500 px-6 py-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red transition-all text-lg shadow-sm ${className}`}
      {...props}
    />
  );
};