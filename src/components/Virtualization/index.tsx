import React, { FC, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { componentLogger } from '../../hoc/componentLogger';

const ITEM_HEIGHT = 50;
const OVERSCAN = 0;

// Scroll height = ITEM_HEIGHT * Item Length
// Items need to render = (containerHeight / ITEM_HEIGHT) + OVERSCAN
// Start index of rendered element = Math.floor(scroll position / ITEM_HEIGHT)

interface VirtualListPropsBase<T> {
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;
}

type VirtualListProps = VirtualListPropsBase<any>;

const VirtualListBase: FC<VirtualListProps> = ({ items, renderItem }) => {
    const [scrollTop, setScrollTop] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const observer = new ResizeObserver((entries) => {
            setContainerHeight(entries[0].contentRect.height);
        });
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    const totalHeight = ITEM_HEIGHT * items.length;

    const startIndex = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT - OVERSCAN));

    const visibleCount = Math.ceil(containerHeight / ITEM_HEIGHT);

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
            className="overflow-y-auto border w-[800px] h-full"
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

export const VirtualList = componentLogger<VirtualListProps>(VirtualListBase);

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
