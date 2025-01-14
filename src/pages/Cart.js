import React from "react";
import CartContent from "./CartContent";

export default function Cart({ items }) {
    return (
        <div className="cart-container">
            <p className="cart-title">Cart</p>
            <div className="div-line"></div>
            {items.length === 0 ? (
                <p className="cart-cont">
                    Your cart is empty.
                </p>
            ) : (
                <div>
                    <CartContent/>
                </div>
            )}
        </div>
    )
}