import React from 'react';
import { useSelector } from 'react-redux';
import { TodoContext } from './todoSlice'
import { TodoItemType } from './interface'
import TodoAdd from './child/todo-add'
import TodoList from './child/todo-list'
import TodoTab from './child/todo-tab'
import styles from './index.module.scss';

interface IProps {

}

const Todo: React.FC<IProps> = () => {
    const state = useSelector(TodoContext);
    const showList: TodoItemType[] = state.list.filter((value: TodoItemType) => {
        return state.tab === 0 ? true : state.tab === 1 === value.complete
    });
    return (
        <div className={styles.todo}>
            <TodoAdd />
            <TodoTab length={showList.length} />
            <TodoList list={showList} />
        </div>
    )
}
export default Todo