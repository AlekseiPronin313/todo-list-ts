import React, {useState} from "react";
import Style from "./InputField.module.scss";
import Button from "../Button/Button";

const DEFAULT_TODO = { name: '', description: '' };

interface AddTodoPanelProps {
    mode: 'add'
    addTodo: ({name, description}: Omit<Todo, 'checked' | 'id'>) => void
}

interface EditTodoPanelProps {
    mode: 'edit'
    editTodo: Omit<Todo, 'checked' | 'id'>
    changeTodo: ({name, description}: Omit<Todo, 'checked' | 'id'>) => void
}

type InputFieldProps = AddTodoPanelProps | EditTodoPanelProps

const InputField: React.FC<InputFieldProps> = (props) => {
    const isEdit = props.mode === 'edit'
    const [todo, setTodo] = useState(isEdit ? props.editTodo : DEFAULT_TODO)
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setTodo({ ...todo, [name]: value });
    };

    const onClickButton = () => {
        const todoItem = {name: todo.name, description: todo.description}
        if (isEdit) {
            return props.changeTodo(todoItem)
        }
        props.addTodo(todoItem)
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
                    <Button color={'blue'} onClick={onClickButton}>ADD</Button>
                )}
                {isEdit && (
                    <Button color={'orange'} onClick={onClickButton}>EDIT</Button>
                )}
            </div>
        </div>
    )
}

export default InputField
