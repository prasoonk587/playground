import { FC, KeyboardEvent, useState } from 'react';
import { ITodoItem, useTodoStore } from './useTodoStore';

interface IAddTodoItemProps {
    addItem: (item: ITodoItem) => void;
}

export const AddTodoItem: FC<IAddTodoItemProps> = ({ addItem }) => {
    const [description, setDescription] = useState<string | null>(null);
    const { addTodoItem } = useTodoStore();

    const onChange = (e: any) => {
        setDescription(e.target.value);
    };

    const onAddItem = () => {
        if (!description) return;
        addTodoItem({ description: description, isCompleted: false });
        setDescription(null);
    };

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onAddItem();
        }
    };

    return (
        <div className="flex gap-2 mb-6">
            <input
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Task Description"
                value={description || ''}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <button
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 active:scale-95 transition-all"
                onClick={onAddItem}
            >
                Add Item
            </button>
        </div>
    );
};
