import React from 'react'
import Card from '../../../componenets/Card/Card';
import styles from '../index.module.css'
import { useEffect, useState } from 'react'
const Cards = () => {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    fetch('https://tap-web-1.herokuapp.com/topics/list')
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, [])
  return (
    <div className={styles.cards}>
      {
        cards ?
          cards.map((card) => (<Card key={card.id} card={card} />)) : "no cards"}
    </div>

  )
}

export default Cards