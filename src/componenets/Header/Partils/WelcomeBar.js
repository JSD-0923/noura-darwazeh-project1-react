import React from 'react';
import styles from '../Header.module.css';

function WelcomeBar(props) {
    return (
        <>
            <div className={styles.welcomeSection}>
                <h2>Welcome to our webaite!</h2>
                <p>We have a new design that's fresh, modern, and easy to use.</p>
            </div>

        </>
    )
}
export default WelcomeBar;