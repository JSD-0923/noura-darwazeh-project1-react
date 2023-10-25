import styles from './Footer.module.css'
import {FaHeart} from 'react-icons/fa'
function Footer ()
{
    return(
        <footer className={styles.footer}>
            <p>Developed with <FaHeart color='var(--heart-color)'/>&copy;2023</p>
        </footer>

    )
}
export default Footer;