import React from "react";
import CartContent from "./CartContent";

export default function Cart(){
    return(
        <div className="cart-container">
            <p className="cart-title">Cart</p>
            <div className="div-line"></div>
            <p className="cart-cont">
                {/* Your cart is empty. */}
            </p>
            <CartContent/>
        </div>
    )
}