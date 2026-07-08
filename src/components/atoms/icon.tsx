import { FC } from 'react';

export type IconName = 'star-filled' | 'star-outline' | 'chevron-down' | 'spinner';

interface IconProps {
    name: IconName;
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
