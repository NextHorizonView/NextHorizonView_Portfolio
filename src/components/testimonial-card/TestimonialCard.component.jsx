import React from 'react'
import './TestimonialCard.styles.css'
import star from '../../assets/star.png'

const TestimonialCard = ({ testimonial }) => {
    const stars = new Array(testimonial.numOfStars).fill(0);
    return (
        <div className='testimonial-card-container'>
            <div>
                <div className='star-container'>
                    {stars.map((_, id) => <img src={star} key={id} />)}
                </div>
                <p>{testimonial.description}</p>
            </div>
            <div className='person-detail'>
                <img className='person-img' src={testimonial.photo} />
                <div className='person-desc'>
                    <p>{testimonial.name}</p>
                    <p>{testimonial.designation}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard