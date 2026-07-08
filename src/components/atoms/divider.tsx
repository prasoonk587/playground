import { FC, HTMLAttributes } from 'react';

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
    orientation?: 'horizontal' | 'vertical';
    label?: string;
}

export const Divider: FC<DividerProps> = ({
    orientation = 'horizontal',
    label,
    className = '',
    ...props
}) => {
    if (orientation === 'vertical') {
        return (
            <div
                role="separator"
                aria-orientation="vertical"
                className={`inline-block w-px self-stretch bg-neutral-200 ${className}`}
                {...props}
            />
        );
    }

    if (label) {
        return (
            <div
                role="separator"
                aria-orientation="horizontal"
                className={`flex items-center gap-3 ${className}`}
                {...props}
            >
                <span className="flex-1 h-px bg-neutral-200" />
                <span className="text-xs text-neutral-500 font-medium">{label}</span>
                <span className="flex-1 h-px bg-neutral-200" />
            </div>
        );
    }

    return (
        <div
            role="separator"
            aria-orientation="horizontal"
            className={`h-px w-full bg-neutral-200 ${className}`}
            {...props}
        />
    );
};
