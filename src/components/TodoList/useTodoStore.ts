import { create } from 'zustand';

export interface ITodoItem {
    id: number;
    description: string | null;
    isCompleted: boolean;
}

export type CreateTodoItem = Omit<ITodoItem, 'id'>;
export type UpdateTodoItem = Partial<Omit<ITodoItem, 'id'>> & Pick<ITodoItem, 'id'>;

interface ITodoState {
    todoItems: ITodoItem[];
    addTodoItem: (todoItem: CreateTodoItem) => void;
    updateTodoItem: (todoItem: UpdateTodoItem) => void;
}

export const useTodoStore = create<ITodoState>((set) => ({
    todoItems: [],
    addTodoItem: (todoItem) =>
        set((state) => ({
            todoItems: [{ ...todoItem, id: Date.now() }, ...state.todoItems],
        })),
    updateTodoItem: (todoItem) =>
        set((state) => ({
            todoItems: state.todoItems.map((item) =>
                item.id === todoItem.id ? { ...item, ...todoItem } : item
            ),
        })),
}));
