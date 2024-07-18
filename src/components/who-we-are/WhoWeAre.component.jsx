import React from 'react'
import './WhoWeAre.styles.css'
import rightArrow from '../../assets/right-arrow.png'
import { motion } from 'framer-motion'
import { InlineWidget, PopupButton } from 'react-calendly'

const spring = {
    type: "spring",
};

const containerVariants = {
    hover: {}
};

const btnVariants = {
    initial: {
        x: 0,
        transition: spring
    },
    hover: {
        x: 40,
        transition: spring
    }
};

const arrowVariants = {
    initial: {
        x: 0,
        transition: spring
    },
    hover: {
        x: -155,
        transition: spring
    }
};

const WhoWeAre = () => {
    return (
        <section className='who-we-are-section'>
            <div className='who-we-are-wrapper'>
                <div className='project-btn'>About Us</div>
                <h1>Who <span className='italic'>we</span> are?</h1>
                <motion.div transition={{ duration: 0.5 }} initial={{ opacity: 0, scale: 0.75, rotateX: '50deg' }} whileInView={{ opacity: 1, scale: 1, rotateX: '0deg' }} viewport={{ margin: '-200px', once: true }} className='who-we-are-frame'>
                    <p className='header'>Introduction</p>
                    <p className='who-we-are-para'>At the forefront of design innovation, our
                        agency harnesses digital creativity to help
                        brands innovate rapidly and effectively.</p>
                    <motion.div
                        className='book-call-btn-wrapper'
                        variants={containerVariants}
                        initial="initial"
                        whileHover="hover"
                    >
                        <motion.div
                            className='book-call-btn'
                            variants={btnVariants}
                        >
                            Book a call
                            <PopupButton
                                url="https://calendly.com/nexthorizonview/30min"
                                rootElement={document.getElementById("root")}

                            />
                        </motion.div>
                        <motion.div
                            className='book-call-btn-arr'
                            variants={arrowVariants}
                        >
                            <img src={rightArrow} alt="Right Arrow" />
                        </motion.div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    )
}

export default WhoWeAre