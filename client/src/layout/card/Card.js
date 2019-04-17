import React from 'react'
import styles from './Card.module.scss'

const Card = ({children, typeName, ...props}) => {
    return <div className={typeName==='primary' ? styles.primaryCard : styles.lightCard} {...props}>{children}</div>
}


export default Card