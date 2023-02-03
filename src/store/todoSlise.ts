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

type TodosState = {
    list: Todo[]
    todoIdForEdit: Todo['id'] | null
}

const initialState: TodosState = {
    list: DEFAULT_TODO_LIST,
    todoIdForEdit: null
}

const todoSlise = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction< Omit<Todo, 'checked' | 'id'>>) {
            const {name, description} = action.payload
            state.list.push({
                id: state.list.length + 1,
                description,
                name,
                checked: false
            })
        },
        deleteTodo(state, action: PayloadAction<Todo['id']>) {
           state.list = state.list.filter(todo => todo.id !== action.payload)
        },
        checkTodo(state, action: PayloadAction<Todo['id']>) {
            const toggledTodo = state.list.find((todo) => todo.id === action.payload)
            if (toggledTodo) {
                toggledTodo.checked = !toggledTodo.checked
            }
        },
        selectTodoIdForEdit(state, action: PayloadAction<Todo['id']>) {
            state.todoIdForEdit = action.payload
        },
        changeTodo(state, action: PayloadAction<Omit<Todo, 'checked' | 'id'>>) {
            const {name, description} = action.payload
            const newList = state.list.find((todo) => todo.id === state.todoIdForEdit)
            if (newList) {
                newList.name = name
                newList.description = description
            }
            state.todoIdForEdit = null
        }
    }
})

export const {addTodo, deleteTodo, checkTodo, selectTodoIdForEdit, changeTodo} = todoSlise.actions
export default todoSlise.reducer
