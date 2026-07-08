import { FC, HTMLAttributes, useState } from 'react';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type AvatarShape = 'circle' | 'square';

interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
    src?: string;
    alt?: string;
    initials?: string;
    size?: AvatarSize;
    shape?: AvatarShape;
}

const sizeStyles: Record<AvatarSize, string> = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
};

const shapeStyles: Record<AvatarShape, string> = {
    circle: 'rounded-full',
    square: 'rounded-md',
};

const imgSizeStyles: Record<AvatarSize, string> = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
};

export const Avatar: FC<AvatarProps> = ({
    src,
    alt = '',
    initials,
    size = 'md',
    shape = 'circle',
    className = '',
    ...props
}) => {
    const [imgError, setImgError] = useState(false);
    const showImage = src && !imgError;

    return (
        <span
            className={`inline-flex items-center justify-center shrink-0 font-medium select-none overflow-hidden bg-muted text-muted-foreground ${sizeStyles[size]} ${shapeStyles[shape]} ${className}`}
            {...props}
        >
            {showImage ? (
                <img
                    src={src}
                    alt={alt}
                    className={`object-cover ${imgSizeStyles[size]} ${shapeStyles[shape]}`}
                    onError={() => setImgError(true)}
                />
            ) : (
                <span>{initials ?? alt.slice(0, 2).toUpperCase() ?? '?'}</span>
            )}
        </span>
    );
};
