import React from 'react';
import Style from './Header.module.scss';

interface HeaderProps {
    todoCount: number
}

const Header: React.FC<HeaderProps> = ({todoCount}) => (
    <div className={Style.header_container}>
        <h1 className={Style.header_title}>
            Todo list <b>{todoCount}</b> task(s)
        </h1>
    </div>
);

export default Header
