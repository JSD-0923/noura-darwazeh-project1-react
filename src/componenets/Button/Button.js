import React from 'react';
import styles from './Button.module.css'
function Button(props) {

    return (
        <button className={styles.button}>
            <span>{props.icon}</span>
            {props.children}
        </button>
    )
}
export default Button;