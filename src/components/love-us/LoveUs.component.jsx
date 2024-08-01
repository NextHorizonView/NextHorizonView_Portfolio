import React from 'react'
import './LoveUs.styles.css'
import lu1 from '../../assets/lu1.png'
import lu2 from '../../assets/lu2.png'
import lu3 from '../../assets/lu3.png'
import { motion } from 'framer-motion'

const LoveUs = () => {
    return (
        <section className='love-us-section'>
            <h1>Reasons you will <span className='italic'>love</span> us.</h1>
            <div className='love-us-card-container'>
                <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ margin: '-100px', once: true }} className='love-us-card'>
                    <img src={lu1} className='love-us-card-img' />
                    <div>
                        <h3 className='love-us-card-header'>Lightning Fast Delivery</h3>
                        <p className='love-us-card-text'>Receive your designs one at<br />
                            a time in just a few days.</p>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ margin: '-140px', once: true }} className='love-us-card'>
                    <img src={lu2} className='love-us-card-img' />
                    <div>
                        <h3 className='love-us-card-header'>Unlimited Revisions</h3>
                        <p className='love-us-card-text'>Receive your designs one at<br />
                            a time in just a few days.</p>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ margin: '-180px', once: true }} className='love-us-card'>
                    <img src={lu3} className='love-us-card-img' />
                    <div>
                        <h3 className='love-us-card-header'>Unique & All Yours</h3>
                        <p className='love-us-card-text'>Receive your designs one at<br />
                            a time in just a few days.</p>

                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default LoveUs