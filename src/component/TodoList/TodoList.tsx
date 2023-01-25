import React from 'react';
import Style from './TodoList.module.scss'
import TodoItem from "./TodoItem/TodoItem";
import InputField from "../InputField/InputField";

interface TodoListProps {
    todos: Todo[]
    todoIdForEdit: Todo['id'] | null
    changeTodo: ({name, description}: Omit<Todo, 'checked' | 'id'>) => void
    checkTodo: (id: Todo['id']) => void
    deleteTodo: (id: Todo['id']) => void
    selectTodoIdForEdit: (id: Todo['id']) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos,
                                               checkTodo,
                                               deleteTodo,
                                               selectTodoIdForEdit,
                                               todoIdForEdit,
                                               changeTodo }) => {
    return (
        <div className={Style.todoList}>
            {todos.map(todo => {
                if (todo.id === todoIdForEdit)
                    return (
                        <InputField
                        key={todo.id}
                        mode={'edit'}
                        changeTodo={changeTodo}
                        editTodo={{name: todo.name, description: todo.description}}
                        />
                    )

                return (
                    <TodoItem key={todo.id} todo={todo}
                              checkTodo={checkTodo}
                              deleteTodo={deleteTodo}
                              selectTodoIdForEdit={selectTodoIdForEdit}
                    />
                )
            })}
        </div>
    )
}

export default TodoList
