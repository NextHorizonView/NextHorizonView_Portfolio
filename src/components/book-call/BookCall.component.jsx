import './BookCall.styles.css'
import Header from '../home-section-header/Header.component'
import React from 'react'

const BookCall = ({ children }) => {
    return (
        <section className='ready-to-scale-section'>
            <div className='ready-to-scale-container'>
                <div className='ready-to-scale'>
                    <div className='ready-to-scale-content'>
                        {children}
                        <div className='hero-btn hero-btn-primary'>
                            <p className='hero-btn-text'>Book a call</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookCall