import React from 'react'
import './Hero.styles.css'
import spinningMetal from '../../assets/spinning-metal.png'
import hoverMetal from '../../assets/hover-metal.png'

const Hero = () => {
    return (
        <section className='hero-section'>
            <div className='spotlight' />
            <div className='hero-content'>
                <h1 className='hero-header'>Ready to <span className='italic'>scale</span> your<br />
                    brand with Horizon View?</h1>
                <p className='hero-text'>Empowering startups with award-winning design solutions to
                    stand out in the market and thrive.</p>
                <img className='hero-img-spin' src={spinningMetal} />
                <img className='hero-img-hover' src={hoverMetal} />
                <div className='hero-btn-container'>
                    <div className='hero-btn hero-btn-primary'>
                        <p className='hero-btn-text'>Contact us</p>
                    </div>
                    <div className='hero-btn hero-btn-secondary'>Book a call</div>
                </div>
            </div>
        </section>
    )
}

export default Hero