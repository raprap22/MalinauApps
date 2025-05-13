import React from 'react';
import classNames from 'classnames';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  return (
    <button
      className={classNames(
        'px-6 py-2 rounded-lg font-semibold transition-colors focus:outline-none',
        {
          'bg-primary-main text-white hover:bg-primary-light': variant === 'primary',
          'bg-secondary-main text-white hover:bg-primary-main': variant === 'secondary',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 