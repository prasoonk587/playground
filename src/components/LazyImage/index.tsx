import { FC, ImgHTMLAttributes, useEffect, useRef, useState } from 'react';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    placeholderClassName?: string;
}

export const LazyImage: FC<LazyImageProps> = ({
    src,
    alt,
    className = '',
    placeholderClassName = '',
    ...props
}) => {
    const [loaded, setLoaded] = useState(false);
    const [inView, setInView] = useState(false);
    const [error, setError] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            {(!loaded || !inView) && !error && (
                <div
                    className={`absolute inset-0 bg-muted animate-pulse ${placeholderClassName}`}
                />
            )}
            {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground text-sm">
                    Failed to load
                </div>
            )}
            {inView && !error && (
                <img
                    src={src}
                    alt={alt}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setLoaded(true)}
                    onError={() => setError(true)}
                    {...props}
                />
            )}
        </div>
    );
};

const DEMO_IMAGES = Array.from({ length: 50 }, (_, i) => ({
    src: `https://picsum.photos/seed/${i + 1}/600/400`,
    alt: `Photo ${i + 1}`,
}));

export const LazyImagePage = () => {
    return (
        <div className="p-8 max-w-3xl mx-auto space-y-4">
            <h1 className="text-2xl font-semibold text-foreground">Lazy Image</h1>
            <p className="text-muted-foreground text-sm">
                Images load only when scrolled into view (200px lookahead). Scroll down to see them
                load.
            </p>
            <div className="grid grid-cols-2 gap-4">
                {DEMO_IMAGES.map(({ src, alt }) => (
                    <LazyImage key={src} src={src} alt={alt} className="rounded-lg h-48" />
                ))}
            </div>
        </div>
    );
};
