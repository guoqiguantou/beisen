import React, { useContext, useState } from 'react';
import { ADD_TODO } from '../interface'
import { TodoContext } from '../index'

interface PropsType {
}

const TodoAdd: React.FC<PropsType> = (props) => {
    const { dispatch } = useContext(TodoContext)
    const [value, setValue] = useState<string>('')

    const onValueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value)
    }

    const onKeyDownChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            onAdd()
        }
    }

    const onAdd = (): void => {
        if (!value) {
            alert('请输入内容')
            return
        }
        dispatch && dispatch({ type: ADD_TODO, title: value });
        setValue("")
    }


    return (
        <div className="addTodo">
            <input
                type="text"
                onChange={onValueChange}
                onKeyDown={onKeyDownChange}
                value={value}
            />
            <button onClick={onAdd}>添加</button>
        </div>
    )

}

export default TodoAdd