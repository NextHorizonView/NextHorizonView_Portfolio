import React, { useEffect, useState, useRef } from 'react';
import './Testimonial.styles.css';
import Header from '../home-section-header/Header.component';
import TestimonialCard from '../testimonial-card/TestimonialCard.component';
import { getTestimonials } from '../../utils/sanity.utils';

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    const testimonialsContainerRef = useRef(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);

    useEffect(() => {
        const fetchData = async () => {
            const testimonials = await getTestimonials();
            setTestimonials(testimonials);
        }
        fetchData();
    }, []);

    useEffect(() => {
        const testimonialsContainer = testimonialsContainerRef.current;

        const handleMouseDown = (e) => {
            isDraggingRef.current = true;
            startXRef.current = e.pageX - testimonialsContainer.offsetLeft;
            scrollLeftRef.current = testimonialsContainer.scrollLeft;
        };

        const handleMouseMove = (e) => {
            if (!isDraggingRef.current) return;
            e.preventDefault();
            const x = e.pageX - testimonialsContainer.offsetLeft;
            const walk = (x - startXRef.current) * 2; // Adjust the scroll speed
            testimonialsContainer.scrollLeft = scrollLeftRef.current - walk;
        };

        const handleMouseUp = () => {
            isDraggingRef.current = false;
        };

        testimonialsContainer.addEventListener('mousedown', handleMouseDown);
        testimonialsContainer.addEventListener('mousemove', handleMouseMove);
        testimonialsContainer.addEventListener('mouseup', handleMouseUp);
        testimonialsContainer.addEventListener('mouseleave', handleMouseUp);

        return () => {
            testimonialsContainer.removeEventListener('mousedown', handleMouseDown);
            testimonialsContainer.removeEventListener('mousemove', handleMouseMove);
            testimonialsContainer.removeEventListener('mouseup', handleMouseUp);
            testimonialsContainer.removeEventListener('mouseleave', handleMouseUp);
        };
    }, []);

    return (
        <section className='testimonial-section'>
            <div className='section-btn'>Testimonials</div>
            <Header>Result speak for <span className='italic'>themselves</span></Header>
            <div className='testimonials-container' ref={testimonialsContainerRef}>
                {testimonials.map((testimonial, id) => <TestimonialCard testimonial={testimonial} key={id} />)}
            </div>
        </section>
    );
}

export default Testimonial;
