import React from 'react'
import './ServiceCard.styles.css'

const ServiceCard = ({ service }) => {
    return (
        <div className='services-card'>
            <img src={service.img} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
        </div>
    )
}

export default ServiceCard