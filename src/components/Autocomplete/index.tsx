import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';

interface IProduct {
    id: number;
    title: string;
    description: string;
    onSelect?: (option: IProduct) => void;
}

export const AutoComplete = () => {
    const [searchString, setSearchString] = useState<string | null>(null);
    const [products, setProducts] = useState<IProduct[]>([]);
    const currentValue = useDebounce(searchString, 600);
    const [loading, setLoading] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState<number>(-1);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [open, setOpen] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setActiveIndex(-1);
        setSearchString(e.target.value);
    };

    useEffect(() => {
        const abortController = new AbortController();
        const fetchProducts = async () => {
            setLoading(true);
            const apiEndPoint = 'https://dummyjson.com/products/search?q=';
            try {
                const response = await fetch(`${apiEndPoint}${currentValue}`, {
                    signal: abortController.signal,
                });
                if (!response.ok) throw 'Error Fetching Product';
                const products = await response.json();
                setProducts(products?.products);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        };

        if (currentValue) {
            fetchProducts();
            return () => {
                abortController.abort();
            };
        }
    }, [currentValue]);

    const selectOption = (product: IProduct) => {
        setSearchString(product.title);
        setActiveIndex(-1);
        inputRef.current?.focus();
        setOpen(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setActiveIndex((index) => Math.min(index + 1, products.length - 1));
                break;
            case 'ArrowUp':
                e.preventDefault();
                setActiveIndex((index) => Math.max(index - 1, 0));
                break;
            case 'Enter':
                e.preventDefault();
                if (activeIndex >= 0) {
                    selectOption(products[activeIndex]);
                }
        }
    };

    // On outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (!inputRef.current?.contains(e.target as Node)) {
                setOpen(false);
                setActiveIndex(-1);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, []);

    // Scroll active into view
    useEffect(() => {
        if (activeIndex < 0 || !listRef.current) return;

        const item = listRef.current.children[activeIndex] as HTMLElement;
        item?.scrollIntoView({ block: 'nearest' });
    }, [activeIndex]);

    return (
        <div className="flex justify-center mt-[200px]">
            <div className="align-center">
                <input
                    ref={inputRef}
                    className="border rounded-xl px-2 py-1 text-sm w-[400px] h-8"
                    placeholder="Type anything to search"
                    value={searchString || ''}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setOpen(true)}
                />
                {open && (
                    <div className="max-h-[400px] overflow-scroll px-1" ref={listRef}>
                        {loading ? (
                            <div>Loading...</div>
                        ) : (
                            products.map((product, index) => (
                                <div
                                    className={`m-1 border-blue rounded px-1 ${activeIndex === index ? 'border' : ''}`}
                                    key={product.id}
                                >
                                    <span>{product.title}</span>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
