import { FC, useState } from "react"
import { ITodoItem } from "."

interface IAddTodoItemProps {
    addItem: (item: ITodoItem) => void
}

export const AddTodoItem: FC<IAddTodoItemProps> = ({addItem}) => {
    const [description, setDescription] = useState<string | null>(null)

    const onChange = (e: any) =>{
        setDescription(e.target.value)
    }

    const onAddItem = () => {
        addItem({description: description, isCompleted: false})
        setDescription(null)
    }

    return <div style={{display: 'flex', padding: '20px 0'}}>
            <input placeholder="Task Description" value={description ||''} onChange={onChange} />
            <button onClick={onAddItem}>Add Item</button>
        </div>
}