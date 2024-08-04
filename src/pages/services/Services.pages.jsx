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
import ScrollToTop from '../../components/scroll-to-top/ScrollToTopComponent';

const Services = () => {
    const navigate = useNavigate();
    return (
        <div className='service-page'>
            <div className='service-content'>
                <Banner>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className='banner-header'>Elevating Sales Through <span className='italic'>Innovative</span> Software Solutions</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >A top-tier Branding Service, renowned for expertise, dedicated to Cultivating Connections</motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
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
                            <p className='services-item-header'>Software Development
                                We provide custom software development services to meet your unique business needs. From concept to deployment, our team ensures high-quality, scalable, and secure solutions.
                            </p>
                            <div className='services-item-list-container'>
                                <ServiceListItem header='Web Development' text='Our web development services include creating responsive, user-friendly websites tailored to your brand. We focus on performance, security, and seamless user experiences.' />
                                <ServiceListItem header='Mobile App Development' text='We design and develop mobile applications that offer excellent user experiences across all devices. Our apps are feature-rich, secure, and optimized for performance.' />
                                <ServiceListItem header='Cloud Services' text='We offer comprehensive cloud services, including cloud migration, management, and support. Our solutions help you leverage the power of cloud computing for scalability and efficiency.' />
                                <ServiceListItem header='IT Consulting' text='Our IT consulting services provide expert guidance to help you navigate the ever-changing technology landscape. We help you make informed decisions to drive your business forward.' />
                                <ServiceListItem header='Cybersecurity' text='We deliver robust cybersecurity solutions to protect your business from threats. Our services include risk assessments, threat detection, and incident response.' />
                                <ServiceListItem header='Data Analytics' text='We provide data analytics services to help you make data-driven decisions. Our team uses advanced tools and techniques to extract valuable insights from your data.' />
                                <ServiceListItem header='Technical Support' text='Our technical support team is available to assist you with any IT issues. We ensure minimal downtime and quick resolution to keep your operations running smoothly.' />
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
            <ScrollToTop />
        </div>
    )
}

export default Services;



const ServiceListItem = ({ header, text }) => {
    return (
        <motion.div
            initial={{ translateX: 30 }}
            whileInView={{ translateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }} className='services-item-list-item'>
            <FontAwesomeIcon color='#fff' className='' icon={faPlus} />
            <div>
                <p className='service-item-list-header'>{header} </p>
                <p className='service-item-text'>{text}</p>
            </div>
        </motion.div>
    )
}