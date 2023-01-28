import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const DEFAULT_TODO_LIST = [
    { id: 1, name: 'task 1', description: 'description 1', checked: false },
    { id: 2, name: 'task 2', description: 'description 2', checked: false },
    {
        id: 3,
        name: 'task 3',
        description:
            'so long task description 3 so long task description so long task description so long task description so long task description',
        checked: true
    }
];

type Todo = {
    id: number,
    name: string,
    description: string,
    checked: boolean,
}

type TodosState = {
    list: Todo[]
}

const initialState: TodosState = {
    list: DEFAULT_TODO_LIST
}

const todoSlise = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.list.push({
                id: state.list[state.list.length - 1].id + 1,
                description: action.payload,
                name: action.payload,
                checked: false
            })
        },
        deleteTodo(state, action: PayloadAction<number>) {
           state.list = state.list.filter(todo => todo.id !== action.payload)
        }
    }
})

export const {addTodo, deleteTodo} = todoSlise.actions
export default todoSlise.reducer
