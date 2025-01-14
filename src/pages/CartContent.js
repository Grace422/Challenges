import React from "react";
// import img from '../images/image-product-1-thumbnail.jpg'
import trash from '../images/icon-delete.svg'

export default function CartContent({ items, removeFromCart }) {
    return (
        <div className="cartcontent-container">
             {items.map((item) => (
                <div className="details" key={item.id}>
                    <img src={item.image} alt={item.name} className="cart-shoe" />
                    <div className="cart-text">
                        <p>{item.name}</p>
                        <p>
                            ${item.price.toFixed(2)} x {item.quantity}{" "}
                            <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                        </p>
                    </div>
                    <img
                        src={trash}
                        alt="trashicon"
                        className="trash-icon"
                        onClick={() => removeFromCart(item.id)}
                    />
                </div>
            ))}
            <button>Checkout</button>
        </div>
    )
}