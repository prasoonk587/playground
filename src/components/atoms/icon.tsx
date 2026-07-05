import { FC } from 'react';

interface IconProps {
    name: string;
    size?: number;
    className?: string;
}

export const Icon: FC<IconProps> = ({ name, size = 24, className }) => {
    return (
        <svg width={size} height={size} className={className} aria-hidden="true" focusable="false">
            <use href={`/images/icons.svg#icon-${name}`} />
        </svg>
    );
};
