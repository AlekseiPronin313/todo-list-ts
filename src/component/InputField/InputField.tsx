import React, {useState} from "react";
import Style from "./InputField.module.scss";
import Button from "../Button/Button";

const DEFAULT_TODO = { name: '', description: '' };

interface TodoPanelProps {
    addTodo: ({name, description}: Omit<Todo, 'checked' | 'id'>) => void
}

const InputField: React.FC<TodoPanelProps> = ({addTodo}) => {
    const [todo, setTodo] = useState(DEFAULT_TODO)
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setTodo({ ...todo, [name]: value });
    };

    const onClickButton = () => {
        addTodo({name: todo.name, description: todo.description})
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
                <Button color={'blue'} onClick={onClickButton}>ADD</Button>
            </div>
        </div>
    )
}

export default InputField
