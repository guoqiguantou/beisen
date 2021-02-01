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
  },
  // 防抖动函数
  debounce: (func: Function, wait: number, immediate: true) => {
    let timeout: NodeJS.Timeout | null;
    return function () {
      //@ts-ignore
      let context = this, args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      timeout && clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  },

};

export default obj
