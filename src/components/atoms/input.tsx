import { FC, InputHTMLAttributes, ReactNode } from 'react';

type InputSize = 'sm' | 'md' | 'lg';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputSize?: InputSize;
    error?: boolean;
    label?: string;
    helperText?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

const sizeStyles: Record<InputSize, string> = {
    sm: 'px-2.5 py-1.5 text-xs',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-2.5 text-base',
};

export const Input: FC<InputProps> = ({
    inputSize = 'md',
    error = false,
    label,
    helperText,
    leftIcon,
    rightIcon,
    className = '',
    disabled,
    id,
    ...props
}) => {
    const borderClass = error
        ? 'border-danger-500 focus:ring-danger-500 focus:border-danger-500'
        : 'border-neutral-300 focus:ring-primary-500 focus:border-primary-500';

    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label htmlFor={id} className="text-sm font-medium text-foreground">
                    {label}
                </label>
            )}
            <div className="relative">
                {leftIcon && (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground pointer-events-none">
                        {leftIcon}
                    </span>
                )}
                <input
                    id={id}
                    disabled={disabled}
                    className={`block w-full rounded-md border outline-none transition-colors focus:ring-2
                        ${sizeStyles[inputSize]}
                        ${borderClass}
                        ${leftIcon ? 'pl-9' : ''}
                        ${rightIcon ? 'pr-9' : ''}
                        ${disabled ? 'opacity-50 cursor-not-allowed bg-muted' : 'bg-background'}
                        ${className}`}
                    {...props}
                />
                {rightIcon && (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground pointer-events-none">
                        {rightIcon}
                    </span>
                )}
            </div>
            {helperText && (
                <p className={`text-xs ${error ? 'text-danger-600' : 'text-muted-foreground'}`}>
                    {helperText}
                </p>
            )}
        </div>
    );
};
