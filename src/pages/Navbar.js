import React, { useState } from 'react';
import img from '../images/image-avatar.png'
import icon from '../images/icon-cart.svg'
import logo from '../images/logo.svg'
import ham from '../images/icon-menu.svg'
import { Link } from 'react-router-dom';
import Hamburg from './Hamburg';
import Cart from './Cart';


export default function Navbar({ cartItems, removeFromCart }) {
    const [isOpen, setOpen] = useState(false)
    const [isShown, setIsShown] = useState(false)
    const toggleHamburg = () => {
        setOpen(!isOpen)
    }
    const closeHamburg = () => {
        setOpen(false)
    }
    const handleCart = () => {
        setIsShown(!isShown)
    }
    
    return (
        <div className='nav-container'>
            <img src={logo} className='logo' alt='logo' />
            <div className='links'>
                <Link to="/collections" className="link">Collections</Link>
                <Link to="/men" className="link">Men</Link>
                <Link to="/women" className="link">Women</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="/contact" className="link">Contact</Link>
            </div>
            <div className='icon-img'>
                {isShown && (
                    <div> 
                        <Cart items={cartItems} removeFromCart={removeFromCart}/> 
                    </div>
                )}
                <div onClick={handleCart}>
                     <img src={icon} className='icon' alt='carticon'/>
                </div>
                <div className='notif'>
                    <p className='notif-num'>
                        {cartItems.reduce((total, item) => total + item.quantity, 0)}
                    </p>
                </div>
                <div className='circle'>
                    <img src={img} alt='useravatar' className='avatar' />
                </div>
            </div>
            <img src={ham} alt='hamburgicon' className='hamburg' onClick={toggleHamburg} />
            {isOpen &&
                <div >
                    <Hamburg closeHamburg={closeHamburg} />
                </div>
            }
        </div>
    )
}