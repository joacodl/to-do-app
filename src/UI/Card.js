import React from 'react'

import styles from './Card.module.css'

const Card = (props) => {
  return (
    <div className={styles.card}>
        <div className={styles.card_title}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Logo_%281992-2001%29.svg/2362px-Windows_Logo_%281992-2001%29.svg.png" alt='Card title icon' width="18" height="18" />
            <span class="title">{props.status}</span>
            <button onClick={props.onDelete}>X</button>
        </div>
        <div className={styles.card_body}>
            {props.children}    
        </div>
    </div>
  )
}

export default Card