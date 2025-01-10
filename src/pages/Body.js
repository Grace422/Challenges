import React from "react";
import img from '../images/image-product-1.jpg'
import img1 from '../images/image-product-1-thumbnail.jpg'
import img2 from '../images/image-product-2-thumbnail.jpg'
import img3 from '../images/image-product-3-thumbnail.jpg'
import img4 from '../images/image-product-4-thumbnail.jpg'
import plus from '../images/icon-plus.svg'
import minus from '../images/icon-minus.svg'
import icon from '../images/icon-cart.svg'


export default function Body() {
    return (
        <div className="body-container">
            <div className="left-side">
                <div className="content">
                    <img src={img} className="pic" alt='bigShoe'/>
                    <div className="pictures">
                        <div className="overlay"></div>
                        <img src={img1} className="pic1" alt='smallShoe'/>
                        <img src={img2} className="pic1" alt='smallShoe'/>
                        <img src={img3} className="pic1" alt='smallShoe'/>
                        <img src={img4} className="pic1" alt='smallShoe'/>
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
                            <img src={minus} id='minus'alt='minussign'/>
                            <p id='num'>0</p>
                            <img src={plus} id='plus' alt='plusShoe'/>
                        </div>
                        <div className="cart">
                            <button className="cart-btn">
                                <img src={icon} alt='carticon'/>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}