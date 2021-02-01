import React, { useContext } from 'react';
//@ts-ignore
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { DELETE_TODO, TRIGGER_TODO, TodoItemType } from '../interface'
import { TodoContext } from '../index'
interface PropsType {
	list: TodoItemType[]
}

const TodoList: React.FC<PropsType> = (props) => {
	const { dispatch } = useContext(TodoContext)

	const onDelete = (id: number): void => {
		dispatch && dispatch({ type: DELETE_TODO, id });
	}

	const onTrigger = (id: number): void => {
		dispatch && dispatch({ type: TRIGGER_TODO, id });
	}

	return (
		<ul className="todoList">
			<TransitionGroup>
				{
					props.list.map((item: TodoItemType) => (
						<CSSTransition
							timeout={200}
							classNames="boss-text"
							unmountOnExit
							key={item.id}
						>
							<li>
								<p>{item.title}</p>
								<button
									onClick={() => { onTrigger(item.id) }}
								>
									{item.complete ? "未完成" : "完成"}
								</button>
								<button onClick={() => { onDelete(item.id) }}>删除</button>
							</li>
						</CSSTransition>
					))
				}
			</TransitionGroup>
		</ul>
	)

}

export default TodoList