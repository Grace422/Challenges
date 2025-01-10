import React from 'react';
import img from '../images/image-avatar.png'
import icon from '../images/icon-cart.svg'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <div className='nav-container'>
            <img src={logo} className='logo' alt='logo'/>
            <div className='links'>
                <Link to="/collections" className="link">Collections</Link>
                <Link to="/men" className="link">Men</Link>
                <Link to="/women" className="link">Women</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="/contact" className="link">Contact</Link>
            </div>
            <div className='appear-on-hover'></div>
            <div className='icon-img'>
                <img src={icon} className='icon' alt='carticon'/>
                <div className='circle'>
                    <img src={img} alt='useravatar'/>
                </div>
            </div>
        </div>
    )
}