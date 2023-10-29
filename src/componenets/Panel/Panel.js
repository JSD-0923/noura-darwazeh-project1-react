import React from 'react'
import styles from './Panel.module.css'
import FavCard from '../FavCard/FavCard';
import { useState, useEffect } from 'react';
const Panel = () => {
    const [favData, setFavData] = useState([]);
    useEffect(() => {
        const storedFavs = JSON.parse(localStorage.getItem('favourites'));
        setFavData(storedFavs);
    }, []);

    return (
        <div className={styles.myFavourite} id="favourite">
            <p>My Favourite Topics</p>
            <div className={styles.fav}>
                {favData ?
                    favData.map((item) =>
                        <FavCard key={item.id} image={item.image} topic={item.topic} id={item.id} />
                    ) : <> Empty! </>}

            </div>
        </div>

    )
}

export default Panel
