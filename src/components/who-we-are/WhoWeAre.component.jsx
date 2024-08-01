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
                    <p className='who-we-are-para'>At the forefront of design innovation, our
                        agency harnesses digital creativity to help
                        brands innovate rapidly and effectively.</p>
                    <ArrowButton>
                        Book a call
                        <PopupButton
                            url="https://calendly.com/nexthorizonview/30min"
                            rootElement={document.getElementById("root")}

                        />
                    </ArrowButton>

                </motion.div>
            </div>
        </section>
    )
}

export default WhoWeAre