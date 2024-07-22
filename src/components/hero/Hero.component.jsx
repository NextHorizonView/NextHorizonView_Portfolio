import React from 'react'
import './Hero.styles.css'
import { PopupButton } from 'react-calendly'

const Hero = () => {

    const scrollToContact = () => {
        const contactForm = document.getElementById('contact-form')
        contactForm.scrollIntoView()
    }

    return (
        <section className='hero-section'>
            <div className='spotlight' />
            <div className='hero-content'>
                <h1 className='hero-header'>Ready to <span className='italic'>scale</span> your
                    brand with Horizon View?</h1>
                <p className='hero-text'>Empowering startups with award-winning design solutions to
                    stand out in the market and thrive.</p>

                <div className='hero-btn-container' onClick={scrollToContact}>
                    <div className='hero-btn hero-btn-primary'>
                        <p className='hero-btn-text'>Contact us</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero