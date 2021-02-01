
export const UPDATE_TAB = "UPDATE_TAB";//切换状态
export const ADD_TODO = "ADD_TODO";//添加项目
export const TRIGGER_TODO = "TRIGGER_TODO";//切换项目状态
export const DELETE_TODO = "DELETE_TODO";//删除项目



export interface tabItemType {
    title: string,
    value: number,
}

export interface TodoItemType {
    id: number;
    title: string,
    complete: boolean,
}

export interface actionType {
    type: string,
    title?: string,
    tab?: number
    id?: number
}

export interface stateType {
    tab: number,//0:全部  1:已完成  2:未完成
    list: TodoItemType[]
}

// reducer 的类型
export type TodoListReducer = React.Reducer<stateType, actionType>

// context 的类型
export type TodoListContext = React.Context<{
    state: stateType,
    dispatch?: React.Dispatch<actionType>
}>
