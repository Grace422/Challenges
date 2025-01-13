import React from "react";
import img from '../images/image-product-1-thumbnail.jpg'
import trash from '../images/icon-delete.svg'

export default function CartContent() {
    return (
        <div className="cartcontent-container">
            <div className="details">
                <img src={img} alt='shoepicture' className="cart-shoe"/>
                <div className="cart-text">
                    <p>Fall limited edition sneakers</p>
                    <p>$125.00 x 3 <strong>$375.00</strong> </p>
                </div>
                <img src={trash} alt='trashicon' className="trash-icon"/>
            </div>
            <button>Checkout</button>
        </div>
    )
}