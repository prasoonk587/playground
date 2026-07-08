import { FC, HTMLAttributes, ReactNode } from 'react';

type TextVariant = 'body' | 'caption' | 'label' | 'code';
type TextSize = 'xs' | 'sm' | 'md' | 'lg';
type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type FontWeight = 'normal' | 'medium' | 'semibold' | 'bold';

interface TextProps extends HTMLAttributes<HTMLElement> {
    as?: 'p' | 'span' | 'div' | 'small' | 'strong' | 'em' | 'code';
    variant?: TextVariant;
    size?: TextSize;
    muted?: boolean;
    truncate?: boolean;
    children?: ReactNode;
}

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    as?: HeadingLevel;
    size?: HeadingLevel;
    weight?: FontWeight;
    muted?: boolean;
    children?: ReactNode;
}

const textVariantStyles: Record<TextVariant, string> = {
    body: '',
    caption: 'text-muted-foreground',
    label: 'font-medium uppercase tracking-wide',
    code: 'font-mono bg-muted rounded px-1 py-0.5',
};

const textSizeStyles: Record<TextSize, string> = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
};

const headingSizeStyles: Record<HeadingLevel, string> = {
    h1: 'text-4xl',
    h2: 'text-3xl',
    h3: 'text-2xl',
    h4: 'text-xl',
    h5: 'text-lg',
    h6: 'text-base',
};

const fontWeightStyles: Record<FontWeight, string> = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
};

export const Text: FC<TextProps> = ({
    as: Tag = 'p',
    variant = 'body',
    size = 'md',
    muted = false,
    truncate = false,
    className = '',
    children,
    ...props
}) => {
    return (
        <Tag
            className={`text-foreground ${textSizeStyles[size]} ${textVariantStyles[variant]} ${muted ? 'text-muted-foreground' : ''} ${truncate ? 'truncate' : ''} ${className}`}
            {...(props as any)}
        >
            {children}
        </Tag>
    );
};

export const Heading: FC<HeadingProps> = ({
    as: Tag = 'h2',
    size,
    weight = 'semibold',
    muted = false,
    className = '',
    children,
    ...props
}) => {
    const resolvedSize = size ?? Tag;
    return (
        <Tag
            className={`text-foreground ${headingSizeStyles[resolvedSize]} ${fontWeightStyles[weight]} ${muted ? 'text-muted-foreground' : ''} ${className}`}
            {...props}
        >
            {children}
        </Tag>
    );
};
