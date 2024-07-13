import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './Navigation.styles.css'
import Cursor from 'react-cursor-follow'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    }
    )

    return (
        <ReactLenis root>
            <div className='nav-container' style={{ backgroundColor: isMenuOpen && '#121212', zIndex: 999 }}>
                <Link to='/' className='nav-logo'>
                    <img className='nav-logo' src={Logo} alt='company-logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/projects'>Projects</Link>
                    <Link className='nav-link' to='/about'>About</Link>
                    <Link className='nav-link' to='/services'>Services</Link>
                    <Link className='nav-link' to='/contact'>Contact</Link>
                </div>
                <div className='menubar' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <div className='bar' />
                    <div className='bar' />
                </div>
            </div>
            <div className={`${isMenuOpen ? 'sm-nav-container reveal' : 'sm-nav-container'}`}>
                <Link className='nav-link sm-nav-link' to='/projects'>Projects</Link>
                <Link className='nav-link sm-nav-link' to='/about'>About</Link>
                <Link className='nav-link sm-nav-link' to='/services'>Services</Link>
                <Link className='nav-link sm-nav-link' to='/contact'>Contact</Link>
            </div>
            <Outlet />
            <div className='cursor'>
                {/* <Cursor color={'#fff'} size={10} /> */}
            </div>
        </ReactLenis>
    )
}

export default Navigation