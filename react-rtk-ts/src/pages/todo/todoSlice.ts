import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import { TodoItemType, TodoState } from './interface'
import commonUtils from '@/utils/common'


//从缓存读取数据
const list: TodoItemType[] = commonUtils.getTodoList();
const tab: number = commonUtils.getTab();

// 初始化的state
const initialState: TodoState = {
  tab: tab, list: list
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    updateTab: (state: TodoState, action: PayloadAction<number>) => {
      state.tab = action.payload;
      commonUtils.setTab(action.payload);
    },
    addTodo: (state: TodoState, action: PayloadAction<string>) => {
      state.list.push({
        title: action.payload,
        complete: false,
        id: new Date().getTime()
      });
      commonUtils.setTodoList(state.list)
    },
    deleteTodo: (state: TodoState, action: PayloadAction<number>) => {
      state.list = state.list.filter((value) => value.id !== action.payload)
      commonUtils.setTodoList(state.list)
    },
    toggleTodo: (state: TodoState, action: PayloadAction<number>) => {
      state.list.forEach(value => {
        if (value.id === action.payload) {
          value.complete = !value.complete
        }
      })
      commonUtils.setTodoList(state.list)
    },
  },
});

export const { updateTab, addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

//异步添加
export const addTodoAsync = (amount: string): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(addTodo(amount));
  }, 1000);
};

export const TodoContext = (state: RootState) => state.todo;

export default todoSlice.reducer;
