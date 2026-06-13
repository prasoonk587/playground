import { ReactNode, useCallback, useMemo, useRef, useState } from 'react';
import { start } from 'repl';

const ITEM_HEIGHT = 50;
const CONTAINER_HEIGHT = 400;
const OVERSCAN = 4;

// Scroll height = ITEM_HEIGHT * Item Length
// Items need to render = (CONTAINER_HEIGHT / ITEM_HEIGHT ) + OVERSCAN;
// Start index of rendered element = Math.floor(scroll position / ITEM_HEIGHT)

interface VirtualListProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;
}

export const VirtualList = <T,>({ items, renderItem }: VirtualListProps<T>) => {
    const [scrollTop, setScrollTop] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const totalHeight = ITEM_HEIGHT * items.length;

    const startIndex = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT - OVERSCAN));

    const visibleCount = Math.ceil(CONTAINER_HEIGHT / ITEM_HEIGHT);

    const endIndex = Math.min(items.length - 1, startIndex + visibleCount + OVERSCAN * 2);

    const visibleItems = useMemo(() => {
        return items.slice(startIndex, endIndex + 1);
    }, [startIndex, endIndex, items]);

    const offsetY = startIndex * ITEM_HEIGHT;

    const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
        setScrollTop(e.currentTarget.scrollTop);
    }, []);

    return (
        <div
            ref={containerRef}
            className="overflow-y-auto border w-[400px]"
            style={{ height: CONTAINER_HEIGHT }}
            onScroll={handleScroll}
        >
            <div
                className="relative"
                style={{
                    height: totalHeight,
                }}
            >
                <div
                    style={{
                        position: 'relative',
                        transform: `translateY(${offsetY}px)`,
                    }}
                >
                    {visibleItems.map((item, index) => {
                        return (
                            <div className="p-1" style={{ height: ITEM_HEIGHT }}>
                                {renderItem(item, startIndex + index)}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export const VirtualListImplementation = () => {
    return (
        <div className="flex justify-center">
            <div>
                <div className="flex justify-center mb-1">
                    <p>Virtualization</p>
                </div>
                <div className="h-[800px]">
                    <VirtualList
                        items={Array.from({ length: 10000 }, (_, i) => i)}
                        renderItem={(i: any) => (
                            <div
                                key={i}
                                className={`flex justify-center border h-full  align-center flex-wrap`}
                            >
                                <p>{i}</p>
                            </div>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};
