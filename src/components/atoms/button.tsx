import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: Variant;
    size?: Size;
}

const variantStyles: Record<Variant, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 border border-blue-600',
    secondary: 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-300',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 border border-transparent',
};

const sizeStyles: Record<Size, string> = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
};

export const Button: FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled,
    ...props
}) => {
    return (
        <button
            className={`inline-flex items-center justify-center rounded-md font-medium transition-colors
                disabled:opacity-50 disabled:cursor-not-allowed
                ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};
