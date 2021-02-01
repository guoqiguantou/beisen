import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import todoReducer from '../pages/todo/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer
  },
  devTools: false //是否启用Redux DevTools集成
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
