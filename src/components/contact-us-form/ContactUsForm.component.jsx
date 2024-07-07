import React from 'react'
import './ContactUs.styles.css'
import Header from '../home-section-header/Header.component'

const ContactUsForm = () => {
    return (
        <section className='contact-us-form-section'>
            <div className='project-btn'>Contact Us</div>
            <Header>Reach out to <span className='italic'>us</span></Header>
            <div className='contact-us-form'>
                <div className='flex-item-1'>
                    <h3>Get in touch</h3>
                    <p>Email</p>
                    <h4>support@horizonview.in</h4>
                    <p>Phone:</p>
                    <h4>(123) 456 7890</h4>
                    <p>Address:</p>
                    <h4>Street Address, Your City, State, Zip Code, Country</h4>
                </div>
            </div>
            <div className='flex-item-2'></div>
        </section>     
           
)}              
    
export default ContactUsForm