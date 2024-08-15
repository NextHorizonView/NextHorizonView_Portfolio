import React from 'react'
import './Footer.styles.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <section className='footer-section'>
            <div className='footer-container'>
                <div className='spotlight' />
                <div className='footer-content footer-content-1'>
                    <img src={logo} />
                    <p>Thinks ahead</p>
                </div>
                <div className='list footer-content'>
                    <div>
                        <p>Main Pages</p>
                        <ul>
                            <li><Link to='/projects'>Projects</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/services'>Services</Link></li>
                            <li><Link to='/contact'>Contact Us</Link></li>
                            <li><Link to='/careers'>Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p>Follow us</p>
                        <ul>
                            <li><a target='_blank' href='https://www.linkedin.com/company/horizon-views/'>LinkedIn</a></li>
                            <li><a target='_blank' href='https://www.instagram.com/nexthorizonview/profilecard/?igsh=MW1uZHJneWNtYnkwcg=='>Instagram</a></li>
                            <li><a target='_blank' href='https://x.com/nexthorizonview/'>X</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer