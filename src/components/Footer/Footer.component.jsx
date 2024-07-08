import React from 'react'
import './Footer.styles.css'
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <section className='footer-section'>
            <div className='footer-container'>
                <div className='spotlight' />
                <div className='footer-content footer-content-1'>
                    <img src={logo} />
                    <p>Creative and Award winning brand &
                        design agencies</p>
                </div>
                <div className='list footer-content'>
                    <div>
                        <p>Main Pages</p>
                        <ul>
                            <li>Projects</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Testimonial</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <p>Follow us</p>
                        <ul>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Linked In</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer