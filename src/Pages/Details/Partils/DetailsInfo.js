import React from "react";
import styles from '../Details.module.css'
const DetailsInfo = ({ topic, category, description }) => {
    return (
        <div className={styles.details}>
            <p className={styles.detailsHeader}>{category}</p>
            <h2>{topic}</h2>
            <div>
                {/* <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon> */}
            </div>
            <p className={styles.descriptionParagraph}>{description}</p>
        </div>
    );
}

export default DetailsInfo;
