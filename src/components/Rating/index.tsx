import { FC, useCallback, useState } from 'react';
import { Icon } from '../atoms/icon';

interface RatingProps {
    value?: number;
    onChange?: (rating: number) => void;
}

export const Rating: FC<RatingProps> = ({ value = null, onChange }) => {
    const [ratingState, setRatingState] = useState<number | null>(value);
    const [hoveredRating, setHoveredRating] = useState<number | null>(null);

    const handleOnClick = useCallback((rating: number) => {
        setRatingState(rating);
        onChange?.(rating);
    }, []);

    const handleMouseEnter = useCallback(
        (index: number) => () => {
            setHoveredRating(index);
        },
        []
    );

    const handleMouseLeave = useCallback(() => {
        setHoveredRating(null);
    }, []);

    const getIconName = useCallback(
        (index: number): string => {
            if (hoveredRating) {
                return index + 1 <= hoveredRating ? 'filled' : 'outline';
            }
            return ratingState && index + 1 <= ratingState ? 'filled' : 'outline';
        },
        [hoveredRating, ratingState]
    );

    return (
        <div className="flex">
            {Array.from({ length: 5 }, (_, index) => (
                <div
                    key={index}
                    className="px-1"
                    onMouseEnter={handleMouseEnter(index + 1)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleOnClick(index + 1)}
                >
                    <Icon key={index} name={`star-${getIconName(index)}`} size={32} />
                </div>
            ))}
        </div>
    );
};

export const RatingPage = () => {
    return (
        <div className="flex justify-center h-full items-center">
            <Rating />
        </div>
    );
};
