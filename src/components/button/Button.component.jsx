import React from 'react'
import './Button.styles.css'

const Button = ({ onClickHandler, children, type }) => {
    return (
        <button onClick={onClickHandler} className='button-component' type={type}>
            <p className='btn-text'>{children}</p>
        </button>
    )
}

export default Button