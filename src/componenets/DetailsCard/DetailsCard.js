import React from 'react'
import styles from './DetailsCard.module.css'
const DetailsCard = ({topic, name , image}) => {
  // console.log(cardDetails);
  
  return (
    <div className={styles.detailsCard}>
      <img  src={require("../../assets/imgs/"+ image)} />
      <p className={styles.headerDetalisCard}>{topic}
        <span> by </span>
        <a id="link">{name}</a>
      </p>
      <div className={styles.interestedTheTopic}>
        <p className={styles.interestedParagraph}>Interested about this topic?</p>
        <button>Add to Favourites <ion-icon name="heart-outline"></ion-icon>
        </button>
        <p className={styles.UnlimitedCreditsParagraph}>Unlimited Credits</p>
      </div>
    </div>


  )
}

export default DetailsCard;
