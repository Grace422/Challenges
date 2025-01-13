import React, { useState } from 'react';
import img from '../images/image-avatar.png'
import icon from '../images/icon-cart.svg'
import logo from '../images/logo.svg'
import ham from '../images/icon-menu.svg'
import { Link } from 'react-router-dom';
import Hamburg from './Hamburg';


export default function Navbar() {
    const [isOpen, setOpen] = useState(false)
    const [menuClass, setMenuClass] = useState("menu hidden")
    const [burgIcon, setBurgIcon] = useState("burgIcon unclicked")
    const toggleHamburg = () => {
        if (!isOpen){
            setMenuClass("menu visible")
            setBurgIcon("burgIcon clicked")
        }
        else{
            setMenuClass("menu hidden")
            setBurgIcon("burgIcon unclicked")
        }
        setOpen(!isOpen)
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
                <img src={icon} className='icon' alt='carticon' />
                <div className='notif'>
                    <p className='notif-num'>3</p>
                </div>
                <div className='circle'>
                    <img src={img} alt='useravatar' className='avatar' />
                </div>
            </div>
            <img src={ham} alt='hamburgicon' className='hamburg' />
            <div onClick={toggleHamburg}>
                <Hamburg/>
            </div>
        </div>
    )
}