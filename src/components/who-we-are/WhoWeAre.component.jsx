import React from 'react'
import './WhoWeAre.styles.css'
import rightArrow from '../../assets/right-arrow.png'
import { motion } from 'framer-motion'

const spring = {
    type: "spring",
    // stiffness: 100,
    // damping: 20
};

const containerVariants = {
    hover: {}
};

const btnVariants = {
    initial: { x: 0 },
    hover: {
        x: 40,
        transition: spring
    }
};

const arrowVariants = {
    initial: { x: 0 },
    hover: {
        x: -150,
        transition: spring
    }
};

const WhoWeAre = () => {
    return (
        <section className='who-we-are-section'>
            <div className='who-we-are-wrapper'>
                <div className='project-btn'>About Us</div>
                <h1>Who <span className='italic'>we</span> are?</h1>
                <div className='who-we-are-frame'>
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
                            Book a 15min call
                        </motion.div>
                        <motion.div
                            className='book-call-btn-arr'
                            variants={arrowVariants}
                        >
                            <img src={rightArrow} alt="Right Arrow" />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default WhoWeAre