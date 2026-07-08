import { FC, SVGAttributes } from 'react';

type SpinnerSize = 'sm' | 'md' | 'lg';
type SpinnerVariant = 'primary' | 'neutral' | 'white';

interface SpinnerProps extends SVGAttributes<SVGElement> {
    size?: SpinnerSize;
    variant?: SpinnerVariant;
}

const sizeStyles: Record<SpinnerSize, string> = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
};

const variantStyles: Record<SpinnerVariant, string> = {
    primary: 'text-primary-600',
    neutral: 'text-neutral-400',
    white: 'text-white',
};

export const Spinner: FC<SpinnerProps> = ({
    size = 'md',
    variant = 'primary',
    className = '',
    ...props
}) => {
    return (
        <svg
            className={`animate-spin ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            aria-label="Loading"
            {...props}
        >
            <use href="/images/icons.svg#icon-spinner" />
        </svg>
    );
};
