import React from 'react'
import './Banner.styles.css'

const Banner = ({ children }) => {
    return (
        <section className='banner'>
            <div className='banner-content'>
                {children}
            </div>
        </section>
    )
}

export default Banner