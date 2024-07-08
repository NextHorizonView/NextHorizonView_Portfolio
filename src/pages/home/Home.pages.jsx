import React from 'react';
import './home.styles.css';
import { servicesData } from '../../lib/services';
import ServiceCard from '../../components/services-card/ServiceCard.component';
import Hero from '../../components/hero/Hero.component';
import Brand from '../../components/brand/Brand.component';
import RecentProject from '../../components/recent-project/RecentProject.component';
import Testimonial from '../../components/testimonials/Testimonial.component';
import Header from '../../components/home-section-header/Header.component';
import ContactUsForm from '../../components/contact-us-form/ContactUsForm.component';
import Footer from '../../components/Footer/Footer.component';
import WhoWeAre from '../../components/who-we-are/WhoWeAre.component';
import LoveUs from '../../components/love-us/LoveUs.component';

const Home = () => {
    return (
        <div className='home-page'>
            <Hero />
            <Brand />
            <RecentProject />
            <LoveUs />
            <WhoWeAre />
            <section className='services-section'>
                <div className='project-btn'>About Us</div>
                <h1>What we <span className='italic'>offer</span></h1>
                <div className='services-spotlight' />
                <div className='service-card-container'>
                    {servicesData.map((service, index) => <ServiceCard service={service} key={index} />)}
                </div>
            </section>
            <Testimonial />
            <section className='ready-to-scale-section'>
                <div className='ready-to-scale'>
                    <div className='ready-to-scale-content'>
                        <Header>Ready to scale your brand to <span className='italic'>new heights?</span></Header>
                        <p>If you want to achieve ground-breaking growth with increased sales and profitability with paid ads, then you're in the right place.</p>
                        <div className='hero-btn hero-btn-primary'>
                            <p className='hero-btn-text'>Book a call</p>
                        </div>
                    </div>
                </div>
            </section>
            <ContactUsForm />
            <Footer />
        </div>
    )
}

export default Home;