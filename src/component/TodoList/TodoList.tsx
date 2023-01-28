import React from 'react';
import Style from './TodoList.module.scss'
import TodoItem from "./TodoItem/TodoItem";
import InputField from "../InputField/InputField";
import {useTodo} from "../../utils";
import {useAppSelector} from "../../hooks/hook";

const TodoList: React.FC = () => {
    const todos = useAppSelector(state => state.todos.list)
    const {todoIdForEdit, selectTodoIdForEdit} = useTodo()
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
                              selectTodoIdForEdit={selectTodoIdForEdit}
                    />
                )
            })}
        </div>
    )
}

export default TodoList
