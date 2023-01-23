import React from 'react';
import Style from './Button.module.scss'

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    color: 'orange' | 'blue' | 'red'
}

const Button: React.FC<ButtonProps> = ({children, color, onClick}) => {
    const className = `${Style.button} ${Style[`button_${color}`]}`
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button
