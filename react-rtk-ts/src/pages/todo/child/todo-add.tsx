import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../todoSlice';
import styles from '../index.module.scss';

interface PropsType {
}

const TodoAdd: React.FC<PropsType> = (props) => {
	const dispatch = useDispatch();
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
		dispatch(addTodo(value))
		setValue("")
	}


	return (
		<div className={styles.addTodo}>
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