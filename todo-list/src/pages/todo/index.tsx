import React, { createContext, useReducer } from 'react';
import TodoAdd from './child/todo-add'
import TodoList from './child/todo-list'
import TodoTab from './child/todo-tab'
import commonUtils from '@/utils/common'
import {
  stateType,
  TodoListContext,
  TodoListReducer,
  TodoItemType,
  UPDATE_TAB,
  ADD_TODO,
  DELETE_TODO,
  TRIGGER_TODO
} from './interface';


// 初始化的state
export const initialState: stateType = {
  tab: 0, list: []
}

export const TodoContext: TodoListContext = createContext({ state: initialState })

const reducer: TodoListReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_TAB:
      commonUtils.setTab(action.tab!)
      return {
        ...state,
        tab: action.tab!,
      };
    case ADD_TODO: {
      const list: TodoItemType[] = [
        ...state.list,
        {
          title: action.title!,
          complete: false,
          id: new Date().getTime()
        }
      ]
      commonUtils.setTodoList(list)
      return {
        ...state,
        list
      }
    }
    case DELETE_TODO: {
      const list: TodoItemType[] = state.list.filter(item => item.id !== action.id)
      commonUtils.setTodoList(list)
      return {
        ...state,
        list
      }
    }
    case TRIGGER_TODO: {
      const list: TodoItemType[] = state.list.map(item => item.id === action.id ? { ...item, complete: !item.complete } : item)
      commonUtils.setTodoList(list)
      return {
        ...state,
        list
      }
    }
    default:
      return state
  }
}

export const Todo = (props: any) => {
  const list: TodoItemType[] = commonUtils.getTodoList();
  const tab: number = commonUtils.getTab() || 0;
  const [state, dispatch] = useReducer<TodoListReducer>(reducer, { list, tab });

  const showList: TodoItemType[] = list.filter((value: TodoItemType) => {
    return state.tab === 0 ? true : state.tab == 1 == value.complete
  });

  return (
    <div className="todo">
      <TodoContext.Provider value={{ state, dispatch }}>
        <TodoAdd />
        <TodoTab length={showList.length} />
        <TodoList list={showList} />
      </TodoContext.Provider>
    </div>
  )
}