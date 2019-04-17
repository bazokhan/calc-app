import React, {forwardRef} from 'react'
import styles from './Input.module.scss'

const Input = forwardRef(({typeName, ...props}, ref) => {
    return <input ref={ref} className={typeName==='primary' ? styles.primaryInput : styles.lightInput} {...props} />
})


export default Input