import { FC } from 'react';
import { ITodoItem } from './useTodoStore';

interface ITodoItemProps {
    id: number;
    item: ITodoItem;
    toggleComplete: (index: number, isCompleted: boolean) => void;
}
export const TodoItem: FC<ITodoItemProps> = ({ id, item, toggleComplete }) => {
    return (
        <div className="flex items-center gap-3 px-3 py-2.5 bg-white border border-gray-200 rounded-md">
            <input
                type="checkbox"
                checked={item.isCompleted}
                onClick={() => toggleComplete(id, !item.isCompleted)}
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
