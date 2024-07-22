import './BookCall.styles.css'
import Header from '../home-section-header/Header.component'
import React from 'react'
import { motion } from 'framer-motion'

const BookCall = ({ children }) => {
    return (
        <motion.section
            initial={{ scale: 1.1, rptateX: -30 }}
            whileInView={{ scale: 1, rotateX: 0 }}
            viewport={{ margin: '-200px', once: true }}
            transition={{ duration: 0.5 }}
            className='ready-to-scale-section'>
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
        </motion.section>
    )
}

export default BookCall