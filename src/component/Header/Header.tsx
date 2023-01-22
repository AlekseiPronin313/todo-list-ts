import React from 'react';
import Style from './Header.module.scss';



const Header = ({  }) => (
    <div className={Style.header_container}>
        <h1 className={Style.header_title}>
            Todo list task(s)
        </h1>
    </div>
);

export default Header
