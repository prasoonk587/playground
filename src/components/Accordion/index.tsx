import { ReactNode, useState } from 'react';
import { Icon } from '../atoms/icon';

interface AccordionItem {
    title: string;
    content: ReactNode;
    defaultOpen?: boolean;
}

interface AccordionProps {
    items: AccordionItem[];
}

export const Accordion = ({ items }: AccordionProps) => {
    const [openIndexes, setOpenIndexes] = useState<Set<number>>(
        () => new Set(items.flatMap((item, i) => (item.defaultOpen ? [i] : [])))
    );

    const toggle = (index: number) => {
        setOpenIndexes((prev) => {
            const next = new Set(prev);
            next.has(index) ? next.delete(index) : next.add(index);
            return next;
        });
    };

    return (
        <div className="border rounded-md divide-y overflow-hidden">
            {items.map((item, index) => (
                <div key={index}>
                    <button
                        className="w-full flex justify-between items-center px-4 py-3 text-left text-sm font-medium hover:bg-gray-50 transition-colors"
                        onClick={() => toggle(index)}
                    >
                        {item.title}
                        <Icon
                            name="chevron-down"
                            size={16}
                            className={`transition-transform duration-200 ${openIndexes.has(index) ? 'rotate-180' : ''}`}
                        />
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openIndexes.has(index) ? 'max-h-96' : 'max-h-0'
                        }`}
                    >
                        <div className="px-4 py-3 text-sm text-gray-600 border-t bg-gray-50">
                            {item.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const ITEMS: AccordionItem[] = [
    {
        title: 'What is React?',
        content: 'React is a JavaScript library for building user interfaces, maintained by Meta.',
    },
    {
        title: 'What is TypeScript?',
        content: 'TypeScript is a strongly typed superset of JavaScript that compiles to plain JS.',
    },
    {
        title: 'What is Tailwind CSS?',
        content: 'Tailwind is a utility-first CSS framework for rapidly building custom designs.',
    },
];

export const AccordionImplementation = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="w-[500px]">
                <Accordion items={ITEMS} />
            </div>
        </div>
    );
};
