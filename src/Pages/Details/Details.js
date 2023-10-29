import React from 'react'
import styles from './Details.module.css'
import DetailsInfo from './Partils/DetailsInfo'
import DetailsCard from './Partils/DetailsCard'
import SubTopics from './Partils/SubTopics'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
const Details = () => {
  const [cardDetails, setCardDetails] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://tap-web-1.herokuapp.com/topics/details/${id}`)
          .then((response) => response.json())
          .then((data) => setCardDetails(data));
      }, [id])
    // console.log(cardDetails);
  return (
    <main>
            {cardDetails !== null ? (
                <>
        <section className={styles.middleSection}>
            <DetailsCard topic={cardDetails.topic} name={cardDetails.name} image={cardDetails.image} />
            <DetailsInfo category={cardDetails.category} topic={cardDetails.topic} description={cardDetails.description} />
        </section>
        <SubTopics topic={cardDetails.topic} subtopics={cardDetails.subtopics} />
        </>
        ) : (
             <p>Loading...</p>
        )}
        </main>
   )
}
export default Details
