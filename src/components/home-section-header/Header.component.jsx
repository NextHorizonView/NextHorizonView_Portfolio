import React from 'react'
import './Header.styles.css'
import { motion } from 'framer-motion';

const Header = ({ children }) => {
    return (
        <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className='header'>{children}</motion.h1>
    )
}

export default Header;