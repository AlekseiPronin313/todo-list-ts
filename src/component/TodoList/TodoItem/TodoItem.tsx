import React from "react";
import Style from "./TodoItem.module.scss";
import Button from "../../Button/Button";

interface TodoItemProps {
    todo: Todo
    checkTodo: (id: Todo['id']) => void
    deleteTodo: (id: Todo['id']) => void
    selectTodoIdForEdit: (id: Todo['id']) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo,  checkTodo,  deleteTodo, selectTodoIdForEdit }) => {
    return (
        <div className={Style.todo_item_container}>
            <div>
                <div aria-hidden
                     style={{
                         opacity: todo.checked ? 0.5 : 1,
                         textDecoration: todo.checked ? 'line-through' : "none",
                     }}
                     onClick={() => checkTodo(todo.id)}
                     className={Style.todo_item_title}>
                    {todo.name}
                </div>
                <div aria-hidden className={Style.todo_item_description}>
                    {todo.description}
                </div>
            </div>
            <div className={Style.todo_item_button_container}>
                <Button color='orange' onClick={() => selectTodoIdForEdit(todo.id)}>
                    EDIT
                </Button>
                <Button color='red' onClick={() =>  deleteTodo(todo.id)}>
                    DELETE
                </Button>
            </div>
        </div>
    )
}

export default TodoItem