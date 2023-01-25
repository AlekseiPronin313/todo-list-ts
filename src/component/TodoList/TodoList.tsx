import React from 'react';
import Style from './TodoList.module.scss'
import TodoItem from "./TodoItem/TodoItem";
import InputField from "../InputField/InputField";
import {useTodo} from "../../utils";

const TodoList: React.FC = () => {
    const {todos, todoIdForEdit, checkTodo, deleteTodo, selectTodoIdForEdit} = useTodo()
    return (
        <div className={Style.todoList}>
            {todos.map(todo => {
                if (todo.id === todoIdForEdit)
                    return (
                        <InputField
                        key={todo.id}
                        mode={'edit'}
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
