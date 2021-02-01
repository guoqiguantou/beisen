import { TodoItemType } from '@/pages/todo/interface'

const obj = {
  //设置todoList
  setTodoList: (list: TodoItemType[]): void => localStorage.setItem('list', JSON.stringify(list)),
  //获取todoList
  getTodoList: (): TodoItemType[] => {
    const s = localStorage.getItem("list")
    if (s) return JSON.parse(s);
    return [];
  },
  //设置tab
  setTab: (tab: number): void => localStorage.setItem("tab", tab.toString()),
  //获取tab
  getTab: (): number => {
    const tab = localStorage.getItem("tab")
    if (tab) return parseInt(tab)
    return 0;
  }

};

export default obj
