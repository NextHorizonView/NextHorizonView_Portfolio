import React from 'react'
import './ArrowButton.styles.css'
import { motion } from 'framer-motion'
import { PopupButton } from 'react-calendly'
import rightArrow from '../../assets/right-arrow.png'

const spring = {
  // type: "spring",
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

const ArrowButton = ({ onClickHandler, children }) => {
  return (
    <motion.div
      className='book-call-btn-wrapper'
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
      onClick={onClickHandler}
    >
      <motion.div
        className='book-call-btn'
        variants={btnVariants}
      >
        {children}
      </motion.div>
      <motion.div
        className='book-call-btn-arr'
        variants={arrowVariants}
      >
        <img src={rightArrow} alt="Right Arrow" />
      </motion.div>
    </motion.div>

  )
}

export default ArrowButton