import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TodoContext, updateTab } from '../todoSlice'
import { tabItemType } from '../interface'
import styles from '../index.module.scss';

interface PropsType {
  length: number
}

const TodoTab: React.FC<PropsType> = (props) => {
  const state = useSelector(TodoContext);
  const dispatch = useDispatch();
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

  return (
    <ul className={styles.todoTab}>
      {
        tabList.map((item: tabItemType) => (
          <li
            key={item.value}
            onClick={() => {
              dispatch(updateTab(item.value))
            }}
            className={item.value === state.tab ? styles.highlight : ''}
          >
            {item.value === state.tab && <p className={styles.number} >{props.length}</p>}
            <span>{item.title}</span>
          </li>
        ))
      }
    </ul>
  )

}

export default TodoTab