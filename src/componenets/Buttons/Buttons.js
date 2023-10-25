import React from 'react';
import styles from './Buttons.module.css'
function Buttons(props) {
    return (
        <button className={styles.button}>
            <span>{props.icon}</span>
            {props.children}
        </button>
    )
}
export default Buttons;