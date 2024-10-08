import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './Navigation.styles.css'
import Cursor from '../../components/Cursor/Cursor.component'
import { PopupButton } from 'react-calendly'

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className='nav-container' style={{ backgroundColor: isMenuOpen && '#121212', zIndex: 999 }}>
                <Link to='/' className='nav-logo'>
                    <img className='nav-logo' src={Logo} alt='company-logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/projects'>Projects</Link>
                    <Link className='nav-link' to='/about'>About</Link>
                    <Link className='nav-link' to='/services'>Services</Link>
                    <Link className='nav-link' to='/contact'>Contact</Link>
                    <div className='nav-link gradient-text book-a-call-btn' to='/contact'>
                        Book a call
                        <PopupButton
                            url="https://calendly.com/nexthorizonview/30min"
                            rootElement={document.getElementById("root")}

                        />
                    </div>
                </div>
                <div className='menubar' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <div className='bar' />
                    <div className='bar' />
                </div>
            </div>
            <div className={`${isMenuOpen ? 'sm-nav-container reveal' : 'sm-nav-container'}`}>
                <Link className='nav-link sm-nav-link' to='/projects' onClick={() => setIsMenuOpen(!isMenuOpen)}>Projects</Link>
                <Link className='nav-link sm-nav-link' to='/about' onClick={() => setIsMenuOpen(!isMenuOpen)}>About</Link>
                <Link className='nav-link sm-nav-link' to='/services' onClick={() => setIsMenuOpen(!isMenuOpen)}>Services</Link>
                <Link className='nav-link sm-nav-link' to='/contact' onClick={() => setIsMenuOpen(!isMenuOpen)}>Contact</Link>
                <Link className='nav-link sm-nav-link' to='/careers' onClick={() => setIsMenuOpen(!isMenuOpen)}>Careers</Link>
                <div className='nav-link sm-nav-link gradient-text book-a-call-btn' to='/contact'>
                    Book a call
                    <PopupButton
                        url="https://calendly.com/nexthorizonview/30min"
                        rootElement={document.getElementById("root")}

                    />
                </div>
            </div>
            <Outlet />
            <div className='cursor'>
                <Cursor />
            </div>
        </>
    )
}

export default Navigation