import { FC, SelectHTMLAttributes } from 'react';
import { Icon } from './icon';

type SelectSize = 'sm' | 'md' | 'lg';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    inputSize?: SelectSize;
    error?: boolean;
    label?: string;
    helperText?: string;
    placeholder?: string;
}

const sizeStyles: Record<SelectSize, string> = {
    sm: 'px-2.5 py-1.5 text-xs',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-2.5 text-base',
};

export const Select: FC<SelectProps> = ({
    inputSize = 'md',
    error = false,
    label,
    helperText,
    placeholder,
    className = '',
    disabled,
    id,
    children,
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
                <select
                    id={id}
                    disabled={disabled}
                    className={`block w-full appearance-none rounded-md border outline-none transition-colors focus:ring-2 pr-8 bg-white
                        ${sizeStyles[inputSize]}
                        ${borderClass}
                        ${disabled ? 'opacity-50 cursor-not-allowed bg-neutral-50' : ''}
                        ${className}`}
                    {...props}
                >
                    {placeholder && (
                        <option value="" disabled>
                            {placeholder}
                        </option>
                    )}
                    {children}
                </select>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none text-neutral-400">
                    <Icon name="chevron-down" size={16} />
                </span>
            </div>
            {helperText && (
                <p className={`text-xs ${error ? 'text-danger-600' : 'text-muted-foreground'}`}>
                    {helperText}
                </p>
            )}
        </div>
    );
};
