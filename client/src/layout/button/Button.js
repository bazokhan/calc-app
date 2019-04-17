import React from 'react'
import styles from './Button.module.scss'

const Button = ({children, typeName, ...props}) => {
    return <button className={typeName==='primary' ? styles.primaryButton : styles.lightButton} {...props}>{children}</button>
}


export default Button