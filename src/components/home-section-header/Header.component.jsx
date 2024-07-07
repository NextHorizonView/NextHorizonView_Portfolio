import React from 'react'
import './Header.styles.css'

const Header = ({ children }) => {
    return (
        <h1 className='header'>{children}</h1>
    )
}

export default Header;