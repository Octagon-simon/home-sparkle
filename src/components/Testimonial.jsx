"use client"

import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styles from './Testimonial.module.css';

export default function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const numTestimonials = 3; // Number of testimonials
    const testimonialImages = [
        '/testimonial-1.svg',
        '/testimonial-2.svg',
        '/testimonial-3.svg',
        // Add more image paths as needed
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex < numTestimonials - 1 ? prevIndex + 1 : prevIndex));
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };

    const swipeConfig = useSwipeable({
        onSwipedLeft: nextTestimonial,
        onSwipedRight: prevTestimonial,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <div className={`${styles.carousel}`} {...swipeConfig}>
                <div className={`${styles.testimonialsContainer}`}>
                    {testimonialImages.map((image, index) => (
                        <div key={index} className={`${styles.testimonial} ${index === currentIndex ? `${styles.active}` : ''}`}>
                            <img src={image} alt={`Testimonial ${index + 1}`} />
                        </div>
                    ))}
                </div>
        </div>
    );
    
}
