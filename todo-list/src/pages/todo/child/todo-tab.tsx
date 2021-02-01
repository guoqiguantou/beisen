import React, { useContext } from 'react';
import { UPDATE_TAB, tabItemType } from '../interface'
import { TodoContext, } from '../index'

interface PropsType {
	length: number
}

const TodoTab: React.FC<PropsType> = (props) => {
	const tabList: tabItemType[] = [{
		title: "全部",
		value: 0
	}, {
		title: "已完成",
		value: 1
	}, {
		title: "未完成",
		value: 2
	}]
	const { state, dispatch } = useContext(TodoContext)
	const onChangeTab = (tab: number): void => {
		dispatch && dispatch({ type: UPDATE_TAB, tab });
	}

	return (
		<ul className="todoTab">
			{
				tabList.map((item: tabItemType) => (
					<li
						key={item.value}
						onClick={() => { onChangeTab(item.value) }}
						className={item.value === state.tab ? 'highlight' : undefined}
					>
						{item.value === state.tab && <p className="number" >{props.length}</p>}
						<span>{item.title}</span>
					</li>
				))
			}
		</ul>
	)

}

export default TodoTab