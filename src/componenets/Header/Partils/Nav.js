import Buttons from "../../Button/Button";
import { useEffect, useState } from "react";
import { FaRegHeart, FaRegMoon } from 'react-icons/fa'
import styles from '../Header.module.css'
function Nav(props) {

    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    const [darkMode, setDarkMode] = useState(storedDarkMode);
    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <nav >
            <p>Wep Topics</p>
            <div className="buttons">
                <Buttons onClick={toggleDarkMode} >
                    <FaRegMoon className={styles.icon} />
                    Dark Mode
                </Buttons>
                <Buttons>
                    <FaRegHeart className={styles.icon} />
                    Favourites
                </Buttons>
            </div>
        </nav>

    )
}
export default Nav;