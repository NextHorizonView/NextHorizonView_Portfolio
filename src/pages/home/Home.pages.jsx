import React from 'react';
import './home.styles.css';
import lu1 from '../../assets/lu1.png'
import lu2 from '../../assets/lu2.png'
import lu3 from '../../assets/lu3.png'
import rightArrow from '../../assets/right-arrow.png'

import { servicesData } from '../../lib/services';
import ServiceCard from '../../components/services-card/ServiceCard.component';
import Hero from '../../components/hero/Hero.component';
import Brand from '../../components/brand/Brand.component';
import RecentProject from '../../components/recent-project/RecentProject.component';
import Testimonial from '../../components/testimonials/Testimonial.component';
import Header from '../../components/home-section-header/Header.component';
import ContactUsForm from '../../components/contact-us-form/ContactUsForm.component';

const Home = () => {
    return (
        <div>
            <Hero />
            <Brand />
            <RecentProject />
            {/* <section className='project-section'>
                <div className='project-btn'>Projects</div>
            </section> */}
            <section className='love-us-section'>
                <h1>Reasons you will <span className='italic'>love</span> us.</h1>
                <div className='love-us-card-container'>
                    <div className='love-us-card'>
                        <img src={lu1} className='love-us-card-img' />
                        <div>
                            <h2>Lightning Fast Delivery</h2>
                            <p className='love-us-card-text'>Receive your designs one at<br />
                                a time in just a few days.</p>
                        </div>
                    </div>
                    <div className='love-us-card'>
                        <img src={lu2} className='love-us-card-img' />
                        <div>
                            <h2>Unlimited Revisions</h2>
                            <p className='love-us-card-text'>Receive your designs one at<br />
                                a time in just a few days.</p>
                        </div>
                    </div>
                    <div className='love-us-card'>
                        <img src={lu3} className='love-us-card-img' />
                        <div>
                            <h2>Unique & All Yours</h2>
                            <p className='love-us-card-text'>Receive your designs one at<br />
                                a time in just a few days.</p>

                        </div>
                    </div>
                </div>
            </section>
            <section className='who-we-are-section'>
                <div className='who-we-are-wrapper'>
                    <div className='project-btn'>About Us</div>
                    <h1>Who <span className='italic'>we</span> are?</h1>
                    <div className='who-we-are-frame'>
                        <ul>
                            <li className='list'>Introduction</li>
                        </ul>
                        <p className='who-we-are-para'>At the forefront of design innovation, our
                            agency harnesses digital creativity to help
                            brands innovate rapidly and effectively.</p>
                        <div className='book-call-btn-wrapper'>
                            <div className='book-call-btn'>Book a 15min call</div>
                            <div className='book-call-btn-arr'>
                                <img src={rightArrow} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
            {/* <ContactUsForm /> */}
        </div>
    )
}

export default Home;