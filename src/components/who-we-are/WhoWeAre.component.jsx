import React from 'react'
import './WhoWeAre.styles.css'
import { motion } from 'framer-motion'
import ArrowButton from '../arrow-button/ArrowButton.component'
import { PopupButton } from 'react-calendly'


const WhoWeAre = () => {
    return (
        <section className='who-we-are-section'>
            <div className='who-we-are-wrapper'>
                <div className='project-btn'>About Us</div>
                <h1>Who <span className='italic'>we</span> are?</h1>
                <motion.div transition={{ duration: 0.5 }} initial={{ opacity: 0, scale: 0.75, rotateX: '50deg' }} whileInView={{ opacity: 1, scale: 1, rotateX: '0deg' }} viewport={{ once: true }} className='who-we-are-frame'>
                    <p className='header'>Introduction</p>
                    <p className='who-we-are-para'>At Horizon view, we deliver exceptional software solutions to scale your business 2x. </p>
                    <ArrowButton>
                        Book a call
                        <PopupButton
                            url="https://calendly.com/nexthorizonview/30min"
                            rootElement={document.getElementById("root")}

                        />
                    </ArrowButton>
                    <p className='who-we-are-sm-para'>We guaranteed a reply within 12 hours. If we fail, you will get 15% off instantly with No question asked.</p>
                </motion.div>
            </div>
        </section>
    )
}

export default WhoWeAre