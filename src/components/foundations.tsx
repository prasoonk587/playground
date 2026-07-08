import { FC, ReactNode } from 'react';
import { Heading, Text } from './atoms/typography';

export const Section: FC<{ title: string; children: ReactNode }> = ({ title, children }) => (
    <section className="space-y-4">
        <Heading as="h2" size="h4" className="border-b border-neutral-200 pb-2">
            {title}
        </Heading>
        {children}
    </section>
);

export const Row: FC<{ label?: string; children: ReactNode }> = ({ label, children }) => (
    <div className="space-y-1">
        {label && (
            <Text variant="label" size="xs" muted>
                {label}
            </Text>
        )}
        <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
);
