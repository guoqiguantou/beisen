
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../todoSlice'
import { TodoItemType } from '../interface'
import styles from '../index.module.scss';

interface PropsType {
  list: TodoItemType[]
}

const TodoList: React.FC<PropsType> = (props) => {
  const dispatch = useDispatch();

  return (
    <ul className={styles.todoList}>
      {
        props.list.map((item: TodoItemType) => (
          <li key={item.id}>
            <p>{item.title}</p>
            <button onClick={() => { dispatch(toggleTodo(item.id)) }}>
              {item.complete ? "未完成" : "完成"}
            </button>
            <button onClick={() => { dispatch(deleteTodo(item.id)) }}>删除</button>
          </li>
        ))
      }
    </ul>
  )

}

export default TodoList