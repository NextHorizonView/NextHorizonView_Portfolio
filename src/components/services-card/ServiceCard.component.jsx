import React from 'react'
import './ServiceCard.styles.css'
import { Tilt } from 'react-tilt'

const ServiceCard = ({ service }) => {
    return (
        <Tilt options={{ perspective: 800, transition: true, scale: 1 }}>
            <div className='services-card'>
                <img src={service.img} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
            </div>
        </Tilt>
    )
}

export default ServiceCard