import { FC } from 'react';
import { ITodoItem } from '.';

interface ITodoItemProps {
    index: number;
    item: ITodoItem;
    toggleComplete: (index: number) => void;
}
export const TodoItem: FC<ITodoItemProps> = ({ index, item, toggleComplete }) => {
    return (
        <div className="flex items-center gap-3 px-3 py-2.5 bg-white border border-gray-200 rounded-md">
            <input
                type="checkbox"
                checked={item.isCompleted}
                onClick={() => toggleComplete(index)}
            />

            <span
                className={`flex-1 text-sm transition-opacity ${
                    item.isCompleted ? 'line-through text-gray-400 opacity-50' : 'text-gray-800'
                }`}
            >
                {item.description}
            </span>
        </div>
    );
};
