import React from "react";
import Style from "./InputField.module.scss";

interface Props {

}

const InputField = ({}: Props) => {

    return (
        <div className={Style.todo_panel_container}>
            <div className={Style.fields_container}>
                <div className={Style.field_container}>
                    <label >
                        <div>name</div>
                        <input />
                    </label>
                </div>
                <div className={Style.field_container}>
                    <label >
                        <div>description</div>
                        <input/>
                    </label>
                </div>
            </div>
            <div className={Style.button_container}>

            </div>
        </div>
    )
}

export default InputField
