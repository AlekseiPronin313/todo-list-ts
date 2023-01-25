import React from 'react';
import Style from './Header.module.scss';
import {useTodo} from "../../utils";

const Header: React.FC = () => {
    const {todos} = useTodo()
    return (
    <div className={Style.header_container}>
        <h1 className={Style.header_title}>
            Todo list <b>{todos.length}</b> task(s)
        </h1>
    </div>
)};

export default Header
