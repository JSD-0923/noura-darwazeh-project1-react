import React from 'react'
import { Link } from 'react-router-dom'
import styles from './FavCard.module.css'
const FavCard = ({ topic, image, id }) => {
  return (
   
      <Link to={`/details/${id}`} className={styles.favouriteReact}>
            <div className={styles.favouriteReactImg}>
                <img src={require("../../assets/imgs/" + image)} alt="this is html" />

            </div>
            <div className={styles.favouriteReactDescreption}>
                <p> {topic} </p>
                
            </div>
        </Link>
   
  )
}

export default FavCard


