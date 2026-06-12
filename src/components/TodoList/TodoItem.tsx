import { FC } from "react";
import { ITodoItem } from ".";

interface ITodoItemProps{
    index: number
    item: ITodoItem;
    toggleComplete: (index: number) => void;
}
export const TodoItem: FC<ITodoItemProps> = ({index, item, toggleComplete}) => {
    return <div style={{display:'flex'}}>
        <input type="checkbox" checked={item.isCompleted} onClick={() => toggleComplete(index)} />
        <p>{item.description}</p>
    </div>
}