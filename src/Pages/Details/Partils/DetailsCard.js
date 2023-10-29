import React, { useState , useEffect } from 'react'
import styles from '../Details.module.css'
const DetailsCard = ({ topic, name, image,id } ) => {
    const [isFav , setIsFav] = useState(false);
    const [favourites , setFavourites ] = useState([]);
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favourites')) || [];
        setFavourites(storedFavorites);
        const isTopicFavorite = storedFavorites.some((favorite) => favorite.id === id);
        setIsFav(isTopicFavorite);
      }, [isFav, id]);
    const addToFavorites = () => {
        const newFavorite = {
          id: id,
          image: image,
          topic: topic,
          
        };
        const updateFav = [...favourites, newFavorite];
        setFavourites(updateFav);
        updateLocalStorage(updateFav);
        setIsFav(true);
      };
      const updateLocalStorage = (updateFav) => {
        localStorage.setItem('favourites', JSON.stringify(updateFav));
      };

    return (
        <div className={styles.detailsCard}>
            <img src={require("../../../assets/imgs/" + image)} />
            <p className={styles.headerDetalisCard}>{topic}
                <span> by </span>
                <a id="link">{name}</a>
            </p>
            <div className={styles.interestedTheTopic}>
                <p className={styles.interestedParagraph}>Interested about this topic?</p>

                <button onClick= {addToFavorites}>Add to Favourites <ion-icon name="heart-outline"></ion-icon>
                </button>
                <p className={styles.UnlimitedCreditsParagraph}>Unlimited Credits</p>
            </div>
        </div>


    )
}

export default DetailsCard;
