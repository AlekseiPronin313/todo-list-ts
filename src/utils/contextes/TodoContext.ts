import React from "react";

export interface TodoContextProps {
    todos: Todo[]
    todoIdForEdit: Todo['id'] | null
    changeTodo: ({name, description}: Omit<Todo, 'checked' | 'id'>) => void
    selectTodoIdForEdit: (id: Todo['id']) => void
}

export const TodoContext = React.createContext<TodoContextProps>({
    todos: [],
    todoIdForEdit: null,
    changeTodo: () => {},
    selectTodoIdForEdit: () => {},
})
