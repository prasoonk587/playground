import { FC, InputHTMLAttributes, useEffect, useRef } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    indeterminate?: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({
    label,
    indeterminate = false,
    className = '',
    disabled,
    id,
    ...props
}) => {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);

    return (
        <label
            className={`inline-flex items-center gap-2 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
            <input
                ref={ref}
                type="checkbox"
                id={id}
                disabled={disabled}
                className={`h-4 w-4 rounded border-neutral-300 accent-primary-600 cursor-pointer disabled:cursor-not-allowed ${className}`}
                {...props}
            />
            {label && <span className="text-sm text-neutral-700">{label}</span>}
        </label>
    );
};
