import React from 'react';
import './services.styles.css';
import Banner from '../../components/Banner/Banner.component';
import BookCall from '../../components/book-call/BookCall.component';
import Footer from '../../components/Footer/Footer.component';
import Header from '../../components/home-section-header/Header.component';
import serviceItemImg from '../../assets/service.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ArrowButton from '../../components/arrow-button/ArrowButton.component';

const Services = () => {
    const navigate = useNavigate();
    return (
        <div className='service-page'>
            <div className='service-content'>
                <Banner>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: '-100px', once: true }}
                        transition={{ duration: 0.3 }}
                        className='banner-header'>Elevating Sales Through <span className='italic'>Innovative</span> Quality Designs</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >A top-tier Branding Service, renowned for expertise, dedicated to Cultivating Connections</motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: '-100px', once: true }}
                        transition={{ duration: 0.3 }}
                        className='banner-btn'
                    >
                        <ArrowButton onClickHandler={() => navigate('/contact')}>Contact Us</ArrowButton>
                    </motion.div>
                </Banner>

                <div className='services-container'>
                    <div className='services-item'>
                        <div className='services-item-img'>
                            <img src={serviceItemImg} />
                        </div>
                        <div className='services-item-content'>
                            <p className='services-item-header'>Branding defines your market identity; we provide logo design and visual identity to enhance your brand’s presence.</p>
                            <div className='services-item-list-container'>
                                <motion.div
                                    initial={{ translateX: 30 }}
                                    whileInView={{ translateX: 0 }}
                                    viewport={{ margin: '-100px', once: true }}
                                    transition={{ duration: 0.3 }}
                                    className='services-item-list-item'>
                                    <FontAwesomeIcon color='#fff' className='' icon={faPlus} />
                                    <p>Brand Identitiy and design</p>
                                </motion.div>
                                <motion.div
                                    initial={{ translateX: 30 }}
                                    whileInView={{ translateX: 0 }}
                                    viewport={{ margin: '-100px', once: true }}
                                    transition={{ duration: 0.3 }} className='services-item-list-item'>
                                    <FontAwesomeIcon color='#fff' className='' icon={faPlus} />
                                    <p>Visual Identity</p>
                                </motion.div>
                                <motion.div
                                    initial={{ translateX: 30 }}
                                    whileInView={{ translateX: 0 }}
                                    viewport={{ margin: '-100px', once: true }}
                                    transition={{ duration: 0.3 }} className='services-item-list-item'>
                                    <FontAwesomeIcon color='#fff' className='' icon={faPlus} />
                                    <p>Brand Styles</p>
                                </motion.div>
                                <motion.div
                                    initial={{ translateX: 30 }}
                                    whileInView={{ translateX: 0 }}
                                    viewport={{ margin: '-100px', once: true }}
                                    transition={{ duration: 0.3 }} className='services-item-list-item last-item'>
                                    <FontAwesomeIcon color='#fff' className='' icon={faPlus} />
                                    <p>Visuals and Assets</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className='services-item'>
                        <div className='services-item-img'>
                            <img src={serviceItemImg} />
                        </div>
                        <div className='services-item-content'>
                            <p className='services-item-header'>Branding defines your market identity; we provide logo design and visual identity to enhance your brand’s presence.</p>
                            <div className='services-item-list-container'>
                                <motion.div
                                    initial={{ translateX: 30 }}
                                    whileInView={{ translateX: 0 }}
                                    viewport={{ margin: '-100px', once: true }}
                                    transition={{ duration: 0.3 }} className='services-item-list-item'>
                                    <FontAwesomeIcon color='#fff' className='' icon={faPlus} />
                                    <p>Brand Identitiy and design</p>
                                </motion.div>
                                <motion.div
                                    initial={{ translateX: 30 }}
                                    whileInView={{ translateX: 0 }}
                                    viewport={{ margin: '-100px', once: true }}
                                    transition={{ duration: 0.3 }} className='services-item-list-item'>
                                    <FontAwesomeIcon color='#fff' className='' icon={faPlus} />
                                    <p>Visual Identity</p>
                                </motion.div>
                                <motion.div
                                    initial={{ translateX: 30 }}
                                    whileInView={{ translateX: 0 }}
                                    viewport={{ margin: '-100px', once: true }}
                                    transition={{ duration: 0.3 }} className='services-item-list-item'>
                                    <FontAwesomeIcon color='#fff' className='' icon={faPlus} />
                                    <p>Brand Styles</p>
                                </motion.div>
                                <motion.div
                                    initial={{ translateX: 30 }}
                                    whileInView={{ translateX: 0 }}
                                    viewport={{ margin: '-100px', once: true }}
                                    transition={{ duration: 0.3 }} className='services-item-list-item last-item'>
                                    <FontAwesomeIcon color='#fff' className='' icon={faPlus} />
                                    <p>Visuals and Assets</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className='services-item'>
                        <div className='services-item-img'>
                            <img src={serviceItemImg} />
                        </div>
                        <div className='services-item-content'>
                            <p className='services-item-header'>Branding defines your market identity; we provide logo design and visual identity to enhance your brand’s presence.</p>
                            <div className='services-item-list-container'>
                                <motion.div
                                    initial={{ translateX: 30 }}
                                    whileInView={{ translateX: 0 }}
                                    viewport={{ margin: '-100px', once: true }}
                                    transition={{ duration: 0.3 }}
                                    className='services-item-list-item'>
                                    <FontAwesomeIcon color='#fff' className='' icon={faPlus} />
                                    <p>Brand Identitiy and design</p>
                                </motion.div>
                                <motion.div
                                    initial={{ translateX: 30 }}
                                    whileInView={{ translateX: 0 }}
                                    viewport={{ margin: '-100px', once: true }}
                                    transition={{ duration: 0.3 }}
                                    className='services-item-list-item'>
                                    <FontAwesomeIcon color='#fff' className='' icon={faPlus} />
                                    <p>Visual Identity</p>
                                </motion.div>
                                <motion.div
                                    initial={{ translateX: 30 }}
                                    whileInView={{ translateX: 0 }}
                                    viewport={{ margin: '-100px', once: true }}
                                    transition={{ duration: 0.3 }}
                                    className='services-item-list-item'>
                                    <FontAwesomeIcon color='#fff' className='' icon={faPlus} />
                                    <p>Brand Styles</p>
                                </motion.div>
                                <motion.div
                                    initial={{ translateX: 30 }}
                                    whileInView={{ translateX: 0 }}
                                    viewport={{ margin: '-100px', once: true }}
                                    transition={{ duration: 0.3 }}
                                    className='services-item-list-item last-item'>
                                    <FontAwesomeIcon color='#fff' className='' icon={faPlus} />
                                    <p>Visuals and Assets</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                <BookCall>
                    <Header>Ready to scale your brand to <span className='italic'>new heights?</span></Header>
                    <p>If you want to achieve ground-breaking growth with increased sales and profitability with paid ads, then you're in the right place.</p>
                </BookCall>
            </div>
            <Footer />
        </div>
    )
}

export default Services;



