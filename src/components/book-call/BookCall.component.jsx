import './BookCall.styles.css'
import React from 'react'
import { motion } from 'framer-motion'
import { PopupButton } from 'react-calendly'

const BookCall = ({ children }) => {
    return (
        <motion.section
            initial={{ scale: 1.1, rptateX: -30 }}
            whileInView={{ scale: 1, rotateX: 0 }}
            viewport={{ margin: '-100px', once: true }}
            transition={{ duration: 0.5 }}
            className='ready-to-scale-section'>
            <div className='ready-to-scale-container'>
                <div className='ready-to-scale'>
                    <div className='ready-to-scale-content'>
                        {children}
                        <div className='hero-btn hero-btn-primary'>
                            <div className='book-a-call-btn'>
                                Book a call
                                <PopupButton
                                    url="https://calendly.com/nexthorizonview/30min"
                                    rootElement={document.getElementById("root")}

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default BookCall