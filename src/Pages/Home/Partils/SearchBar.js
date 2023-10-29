import React from 'react';
import Select from '../../../componenets/Select/Select';
import styles from '../index.module.css'
import { FaSearch } from 'react-icons/fa'
import { useState,useEffect } from 'react';
function SearchBar() {
    const [query, setQuery] = useState("")
    const [cards, setcard] = useState(null);
    useEffect(() => {
        fetch('https://tap-web-1.herokuapp.com/topics/list')
            .then(response => {
                console.log(response.ok)
                if (!response.ok) {
                    throw Error('Can not connect to the server!.');
                }
                return response.json();
            }).then(data => {
                console.log(data);
                setcard(data)
            }).catch(e => {
                console.log(e.message);
            });
    }, []);


    return (
        <div className={styles.search}>
            <div className={styles.iconInput}>
                <FaSearch className={styles.icon} />
                <input type="text" placeholder="   Search the website..." onChange={event => setQuery(event.target.value)}/><br/>
                {cards &&
                cards.filter(card => {
                    if (card.topic && query && card.topic.toLowerCase().includes(query.toLowerCase())) {
                        return card;
                    }
                }).map((card, index) => (
                    <div className="box" key={index}>
                        <p>{card.topic}</p>
                        
                    </div>
                ))
            }
                
            </div>

            <div className={styles.theSelect}>
                <Select text="Sort-by:" op1="Defult" op2="2" op3="3" />
                <Select text="Filter-by:" op1="Defult" op2="2" op3="3" />

            </div>
        </div>

    )
}
export default SearchBar;