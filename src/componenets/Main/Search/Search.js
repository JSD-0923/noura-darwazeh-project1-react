import styles from './Search.module.css'
import Select from '../Select/Select';
import { FaSearch } from 'react-icons/fa'
function Search (){
    return(
        <div className={styles.search}>
                    <div className={styles.iconInput}>
                        {/* <ion-icon name="search-outline"></ion-icon> */}
                        <FaSearch className={styles.icon} />
                        <input type="text" placeholder="   Search the website..." />
                    </div>

                    <div className={styles.theSelect}>
                        <Select text="Sort-by:" op1="Defult" op2="2" op3="3" />
                        <Select text="Filter-by:" op1="Defult" op2="2" op3="3" />

                    </div>
                </div>
            
    )
}
export default Search;