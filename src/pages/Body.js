import React, { useState } from "react";
import img from '../images/image-product-1.jpg'
import img1 from '../images/image-product-1-thumbnail.jpg'
import img2 from '../images/image-product-2-thumbnail.jpg'
import img3 from '../images/image-product-3-thumbnail.jpg'
import img4 from '../images/image-product-4-thumbnail.jpg'
import bimg1 from '../images/image-product-2.jpg'
import bimg2 from '../images/image-product-3.jpg'
import bimg3 from '../images/image-product-4.jpg'
import plus from '../images/icon-plus.svg'
import minus from '../images/icon-minus.svg'
import icon from '../images/icon-cart.svg'
import Gallery from "./Gallery";
import Slider from './Slider'


export default function Body({ items, addToCart }) {
    const [isShown, setIsShow] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [currentImage, setCurrentImage] = useState(img);
    const handleClick = () => {
        setIsShow(!isShown)
    }
    const closeFrame = () => {
        setIsShow(false)
    }
    const handleIncrease = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDecrease = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };
    const handleThumbnailClick = (image) => {
        setCurrentImage(image);
    };

    return (
        <div className="body-container">
            <div className="left-side">
                <div className="content">
                    {isShown &&
                        <div>
                            <Gallery closeFrame={closeFrame} />
                        </div>}
                    <div className="img-list">
                        <img src={currentImage} className="pic" alt='bigShoe' onClick={handleClick} />
                        <Slider />
                    </div>
                    <div className="pictures">
                        <img src={img1} className={`pic1 ${currentImage === img ? 'active' : ''}`} 
                             alt='smallShoe' onClick={() => handleThumbnailClick(img)}/>
                        <img src={img2} className={`pic1 ${currentImage === bimg1 ? 'active' : ''}`} 
                             alt='smallShoe' onClick={() => handleThumbnailClick(bimg1)}/>
                        <img src={img3} className={`pic1 ${currentImage === bimg2 ? 'active' : ''}`} 
                             alt='smallShoe' onClick={() => handleThumbnailClick(bimg2)}/>
                        <img src={img4} className={`pic1 ${currentImage === bimg3 ? 'active' : ''}`} 
                             alt='smallShoe' onClick={() => handleThumbnailClick(bimg3)}/>
                    </div>
                </div>
            </div>

            <div className="right-side">
                <div className="content">
                    <p id='title'>SNEAKER COMPANY</p>
                    <h1>Fall Limited Edition Sneakers</h1>
                    <p id='text'>These low-profile sneakers are your perfect casual wear companion.
                        Featuring a durable rubber outer sole, they'll withstand everything
                        the weather can offer.
                    </p>

                    <div className="price-btn">
                        <div className="price">
                            <p>$125.00</p>
                        </div>
                        <div className="btn">
                            <button>50%</button>
                        </div>
                    </div>

                    <p className="old-price">$250.00</p>

                    <div className="addtocart">
                        <div className="add">
                            <img src={minus} id='minus' alt='minussign' onClick={handleDecrease} />
                            <p id='num'>{quantity}</p>
                            <img src={plus} id='plus' alt='plusShoe' onClick={handleIncrease} />
                        </div>
                        <div className="cart">
                            <button className="cart-btn" onClick={() => addToCart({ id: 1, name: "Fall Limited Edition Sneakers", price: 125, image: img1, quantity: quantity })}>
                                <img src={icon} alt='carticon' />
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}