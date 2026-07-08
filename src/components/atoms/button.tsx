import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed',
    {
        variants: {
            variant: {
                primary: 'bg-primary-600 text-white hover:bg-primary-700 border border-primary-600',
                secondary:
                    'bg-white text-neutral-800 hover:bg-neutral-100 border border-neutral-300',
                ghost: 'bg-transparent text-neutral-700 hover:bg-accent hover:text-accent-foreground border border-transparent',
            },
            size: {
                sm: 'px-3 py-1 text-sm h-8',
                md: 'px-4 py-2 text-sm h-9',
                lg: 'px-6 py-3 text-base h-11',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        },
    }
);

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                ref={ref}
                className={cn(buttonVariants({ variant, size, className }))}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';
