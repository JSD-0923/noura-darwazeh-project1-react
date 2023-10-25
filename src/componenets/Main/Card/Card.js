import styles from './Card.module.css';
import { Link } from 'react-router-dom';
function Card({card})
{
    return(
        <Link to={`/details/${card.id}`} className={styles.firstTopic} id="details">
                        <div className={styles.firstTopicImg}>
                            <img src={require("../../../assets/imgs/"+ card.image)} alt="this is html" />
                        </div>
                        <div className={styles.firstTopicDescreption}>
                            <p id="details" className={styles.detailsParagraph}> {card.category} <br /><span className={styles.topic}>
                                {card.topic}</span> 
                                </p>
                            <p className={styles.author}>Author: {card.name}</p>
                            </div>
                    </Link>
                    
    )
}
export default Card;