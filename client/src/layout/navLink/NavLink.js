import React from 'react'
import styles from './NavLink.module.scss'
import { NavLink as Link } from 'react-router-dom'

const NavLink = (({typeName, children, ...props}) => {
    return <Link className={typeName==='primary' ? styles.primaryLink : styles.lightLink} {...props}>{children}</Link>
})


export default NavLink