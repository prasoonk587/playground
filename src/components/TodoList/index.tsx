import { FC, useState } from "react";
import { AddTodoItem } from "./AddTodoItem";
import { TodoItem } from "./TodoItem";

export interface ITodoItem {
    description: string | null;
    isCompleted: boolean;
}

export const TodoList = () => {
    const [todoItems, setTodoItems] =  useState<ITodoItem[]>([]);

    const addItem = (item: ITodoItem) => {
        setTodoItems([item, ...todoItems])
    }

    const toggleComplete = (index: number) => {
        setTodoItems(
            (prev) => prev.map((item, i) => {
                if(i !== index) return item;
                return {...item, isCompleted: !item.isCompleted}
            })
        )
    }

    return <div style={{padding: 20}}>
        <AddTodoItem addItem={addItem} />
        <div>
            {
                todoItems.map((item, index) => <TodoItem item={item} index={index} toggleComplete={toggleComplete} /> )
            }
        </div>
    </div>
}