import React from 'react'
import './Testimonial.styles.css'
import Header from '../home-section-header/Header.component';
import TestimonialCard from '../testimonial-card/TestimonialCard.component';
import photo from '../../assets/testimonialImg.png'

const testimonialData = [
    {
        numOfStars: 5,
        description: 'Integration with our existing tools was seamless. Scalable fits perfectly into our workflow.',
        name: 'Harsh Vishwakarma',
        designation: 'CTO, of Href.',
        photo: photo
    },
    {
        numOfStars: 5,
        description: 'Integration with our existing tools was seamless. Scalable fits perfectly into our workflow.',
        name: 'Harsh Vishwakarma',
        designation: 'CTO, of Href.',
        photo: photo,
    },
    {
        numOfStars: 5,
        description: 'Integration with our existing tools was seamless. Scalable fits perfectly into our workflow.',
        name: 'Harsh Vishwakarma',
        designation: 'CTO, of Href.',
        photo: photo
    },
    {
        numOfStars: 5,
        description: 'Integration with our existing tools was seamless. Scalable fits perfectly into our workflow.',
        name: 'Harsh Vishwakarma',
        designation: 'CTO, of Href.',
        photo: photo
    },
]

const Testimonial = () => {
    return (
        <section className='testimonial-section'>
            <div className='section-btn'>Testimonials</div>
            <Header>Result speak for <span className='italic'>themselves</span></Header>
            <div className='testimonials-container'>
                {testimonialData.map((testimonial, id) => <TestimonialCard testimonial={testimonial} key={id} />)}
            </div>
        </section>
    )
}

export default Testimonial;