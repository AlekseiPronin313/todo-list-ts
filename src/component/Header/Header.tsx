import React from 'react';
import Style from './Header.module.scss';
import {useAppSelector} from "../../hooks/hook";

const Header: React.FC = () => {
    const todos = useAppSelector(state => state.todos.list)
    return (
    <div className={Style.header_container}>
        <h1 className={Style.header_title}>
            Todo list <b>{todos.length}</b> task(s)
        </h1>
    </div>
)};

export default Header
