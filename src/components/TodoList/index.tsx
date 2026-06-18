import { FC, useState } from 'react';
import { AddTodoItem } from './AddTodoItem';
import { TodoItem } from './TodoItem';
import { useTodoStore } from './useTodoStore';

export const TodoList = () => {
    const { addTodoItem, updateTodoItem, todoItems } = useTodoStore();

    const toggleComplete = (id: number, isCompleted: boolean) => {
        updateTodoItem({ id, isCompleted });
    };

    return (
        <div style={{ padding: 20 }}>
            <AddTodoItem addItem={addTodoItem} />
            <div>
                {todoItems.map((item, index) => (
                    <TodoItem
                        key={item.id}
                        item={item}
                        id={item.id}
                        toggleComplete={toggleComplete}
                    />
                ))}
            </div>
        </div>
    );
};
