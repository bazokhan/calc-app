import React from 'react'
import styles from './Header.module.scss'

const Header = ({children}) => {
    return <div className={styles.headerContainer}>{children}</div>
}

export default Header