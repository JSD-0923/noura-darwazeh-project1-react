import React from 'react';
import styles from './Button.module.css'
function Button(props) {
    const { onClick } = props;
    return (
        <button className={styles.button} onClick={onClick}>
            <span>{props.icon}</span>
            {props.children}
        </button>
    )
}
export default Button;