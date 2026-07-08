import { FC, InputHTMLAttributes } from 'react';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Radio: FC<RadioProps> = ({ label, className = '', disabled, id, ...props }) => {
    return (
        <label
            className={`inline-flex items-center gap-2 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
            <input
                type="radio"
                id={id}
                disabled={disabled}
                className={`h-4 w-4 border-neutral-300 accent-primary-600 cursor-pointer disabled:cursor-not-allowed ${className}`}
                {...props}
            />
            {label && <span className="text-sm text-foreground">{label}</span>}
        </label>
    );
};
