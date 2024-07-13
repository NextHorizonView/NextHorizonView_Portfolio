import React from 'react';
import './about.styles.css';
import Button from '../../components/button/Button.component';

const About = () => {
    return (
        <div className='about-page'>
            <div className='about-content'>
                <div className='about-banner'>
                    <div className='about-banner-content'>
                        <h1>Bringing Your <span className='italic'>Brand</span> to Life with Designs That Soar</h1>
                        <p>Crafting Exceptional Web Designs and Branding Solutions: Experience-Driven, Relationship-Focused</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;