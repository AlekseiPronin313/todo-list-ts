import Style from "./TodoItem.module.scss";
import React from "react";
import Button from "../Button/Button";

interface Props {

}

const TodoItem = ({}: Props) => {
    return (
        <div className={Style.todo_item_container}>
            <div>
                <div
                    className={Style.todo_item_title}
                >
                </div>
                <div  className={Style.todo_item_description}>

                </div>
            </div>
            <div className={Style.todo_item_button_container}>
                {/*<Button color='orange' >*/}
                {/*    EDIT*/}
                {/*</Button>*/}
                {/*<Button color='red' >*/}
                {/*    DELETE*/}
                {/*</Button>*/}
            </div>
        </div>
    )
}

export default TodoItem
