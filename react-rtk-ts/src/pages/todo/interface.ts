export interface tabItemType {
  title: string,
  value: number,
}

export interface TodoItemType {
  id: number;
  title: string,
  complete: boolean,
}

export interface TodoState {
  tab: number;
  list: TodoItemType[]
}
