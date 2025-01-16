import React, { useState } from "react";
import img from '../images/image-product-1.jpg'
import bimg1 from '../images/image-product-2.jpg'
import bimg2 from '../images/image-product-3.jpg'
import bimg3 from '../images/image-product-4.jpg'
import img1 from '../images/image-product-1-thumbnail.jpg'
import img2 from '../images/image-product-2-thumbnail.jpg'
import img3 from '../images/image-product-3-thumbnail.jpg'
import img4 from '../images/image-product-4-thumbnail.jpg'
import right from '../images/icon-next.svg'
import left from '../images/icon-previous.svg'
import close from '../images/icon-close.svg'


export default function Gallery({ closeFrame }) {
    const slides = [img, bimg1, bimg2, bimg3]
    const thumbnails = [img1, img2, img3, img4];
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        const nextIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(nextIndex);
    };
    const prevSlide = () => {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        setCurrentIndex(prevIndex);
    };
    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
    };
    return (
        <div>
            <div className="gallery-container">
                <img src={close} alt='closeicon' className='gallery-close' onClick={closeFrame} />
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
                <div className="gallery-pictures">
                    {thumbnails.map((thumb, index) => (
                        <div 
                            key={index} 
                            className={`thumbnail-container ${index === currentIndex ? "active" : ""}`} 
                            onClick={() => handleThumbnailClick(index)}
                        >
                            <img src={thumb} className={`gallery-pic ${index === currentIndex ? "highlight" : ""}`} alt={`smallShoe ${index}`} />
                            {index === currentIndex && <div className="overlay"></div>}
                        </div>
                    ))}
                </div>
                <img src={left} alt='leftchevron' className="chevron left" onClick={prevSlide} />
                <img src={right} alt='rightchevron' className="chevron right" onClick={nextSlide} />
            </div>
            <div className="gallery-blur-effect"  onClick={closeFrame}></div>
        </div>
    )
}