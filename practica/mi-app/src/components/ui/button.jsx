// src/components/ui/button.jsx
import React from 'react';

export function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseClasses = 'px-4 py-2 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition';

  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
    ghost: 'bg-transparent hover:bg-gray-700 text-white focus:ring-gray-500',
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
