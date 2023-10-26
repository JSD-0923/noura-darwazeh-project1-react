import React from 'react'
import styles from '../Details.module.css'
import { FaRegCheckCircle } from 'react-icons/fa'

const SubTopic = (props) => {
    return (
        <div className={styles.subTopic}>
            <FaRegCheckCircle className={styles.checkIcons} />
            <p>{props.subTopicName} </p>
        </div>
    )
}
/**
 * 
 * @param {{subtopics:Array<string>}} param0 
 * @returns 
 */
const SubTopics = ({ topic, subtopics }) => {
    const items = subtopics.map((subTopicName, index) =>
        <SubTopic key={index} subTopicName={subTopicName} />
    )
    return (
        <div className={styles.subTopics}>
            <div className={styles.headerSubTopic}>
                <h2>{topic} Sup Topics</h2>
            </div>
            {
                items
            }
        </div>
    )
}
export default SubTopics
