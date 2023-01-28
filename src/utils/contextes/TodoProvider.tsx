import React, {useState} from "react";
import {TodoContext} from "./TodoContext";

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

interface TodoProviderProps {
    children: React.ReactNode
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
    const [todos, setTodos] = useState(DEFAULT_TODO_LIST)
    const [todoIdForEdit, setTodoIdForEdit] = React.useState<Todo['id'] | null>(null)

    const selectTodoIdForEdit = (id: Todo['id']) => {
        setTodoIdForEdit(id)
    }

    const changeTodo = ({name, description}: Omit<Todo, 'checked' | 'id'>) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === todoIdForEdit) {
                    return { ...todo, name, description }
                }
                return todo
            }))
        setTodoIdForEdit(null)
    }

    const value = React.useMemo(() => ({
        todoIdForEdit,
            todos,
            changeTodo,
            selectTodoIdForEdit,
    }), [
        todoIdForEdit,
        todos,
        changeTodo,
        selectTodoIdForEdit,])

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
