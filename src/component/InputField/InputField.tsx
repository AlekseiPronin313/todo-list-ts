import React, {useState} from "react";
import Style from "./InputField.module.scss";
import Button from "../Button/Button";
import {useAppDispatch} from "../../hooks/hook";
import {addTodo, changeTodo} from "../../store/todoSlise";

const DEFAULT_TODO = { name: '', description: '' };

interface AddTodoPanelProps {
    mode: 'add'
}

interface EditTodoPanelProps {
    mode: 'edit'
    editTodo: Omit<Todo, 'checked' | 'id'>
}

type InputFieldProps = AddTodoPanelProps | EditTodoPanelProps

const InputField: React.FC<InputFieldProps> = (props) => {
    const dispatch = useAppDispatch()
    const isEdit = props.mode === 'edit'
    const [todo, setTodo] = useState(isEdit ? props.editTodo : DEFAULT_TODO)
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setTodo({ ...todo, [name]: value });
    };

    const onClickButton = () => {
        const todoItem = {name: todo.name, description: todo.description}
        if (isEdit) {
            return dispatch(changeTodo(todoItem))
        }
        dispatch(addTodo(todoItem))
        setTodo(DEFAULT_TODO)
    }

    return (
        <div className={Style.todo_panel_container}>
            <div className={Style.fields_container}>
                <div className={Style.field_container}>
                    <label htmlFor='name'>
                        <div>name</div>
                        <input type='text' id={'name'} value={todo.name} name={'name'} onChange={onChange}/>
                    </label>
                </div>
                <div className={Style.field_container}>
                    <label >
                        <div>description</div>
                        <input type='text' id={'description'} value={todo.description} name={'description'} onChange={onChange}/>
                    </label>
                </div>
            </div>
            <div className={Style.button_container}>
                {!isEdit && (
                    <Button color={'blue'} disabled={todo.name.length < 2 || todo.description.length < 2} onClick={onClickButton}>ADD</Button>
                )}
                {isEdit && (
                    <Button color={'orange'} disabled={todo.name.length < 2 || todo.description.length < 2} onClick={onClickButton}>EDIT</Button>
                )}
            </div>
        </div>
    )
}

export default InputField
