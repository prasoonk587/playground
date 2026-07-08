import { FC, InputHTMLAttributes } from 'react';

type ToggleSize = 'sm' | 'md';

interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: ToggleSize;
    label?: string;
}

const trackSizeStyles: Record<ToggleSize, string> = {
    sm: 'w-8 h-4',
    md: 'w-11 h-6',
};

const thumbSizeStyles: Record<ToggleSize, string> = {
    sm: 'h-3 w-3',
    md: 'h-5 w-5',
};

const thumbTranslateStyles: Record<ToggleSize, string> = {
    sm: 'translate-x-4',
    md: 'translate-x-5',
};

export const Toggle: FC<ToggleProps> = ({
    size = 'md',
    label,
    checked,
    disabled,
    className = '',
    ...props
}) => {
    return (
        <label
            className={`inline-flex items-center gap-2 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
            <span className="relative inline-flex shrink-0">
                <input
                    type="checkbox"
                    className="sr-only"
                    checked={checked}
                    disabled={disabled}
                    {...props}
                />
                <span
                    className={`${trackSizeStyles[size]} relative inline-flex shrink-0 rounded-full border-2 border-transparent transition-colors ${checked ? 'bg-primary-600' : 'bg-neutral-300'} ${className}`}
                >
                    <span
                        className={`${thumbSizeStyles[size]} pointer-events-none inline-block rounded-full bg-white shadow ring-0 transition-transform ${checked ? thumbTranslateStyles[size] : 'translate-x-0'}`}
                    />
                </span>
            </span>
            {label && <span className="text-sm text-neutral-700">{label}</span>}
        </label>
    );
};
