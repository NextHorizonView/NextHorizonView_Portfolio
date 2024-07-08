import React from 'react'
import './Button.styles.css'

const Button = ({ onClickHandler, children }) => {
    return (
        <button onClick={onClickHandler} className='button-component'>
            <p className='btn-text'>{children}</p>
        </button>
    )
}

export default Button