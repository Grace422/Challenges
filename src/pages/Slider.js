import React, { useState } from "react";
import right from '../images/icon-next.svg'
import left from '../images/icon-previous.svg'
import img from '../images/image-product-1.jpg'
import bimg1 from '../images/image-product-2.jpg'
import bimg2 from '../images/image-product-3.jpg'
import bimg3 from '../images/image-product-4.jpg'


const Slider = () => {
    const slides = [img, bimg1, bimg2, bimg3]
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        const nextIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(nextIndex);
    };
    const prevSlide = () => {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        setCurrentIndex(prevIndex);
    };

    return (
        <div className="slider">
            <div className="slider-content">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentIndex ? "active" : ""}`}
                    >
                        <img src={slide} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            <img src={left} alt='leftchevron' className="chevron left" onClick={prevSlide} />
            <img src={right} alt='rightchevron' className="chevron right" onClick={nextSlide} />
        </div>
    );
};

export default Slider;
