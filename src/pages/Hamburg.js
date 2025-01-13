import React from "react";
import { Link } from 'react-router-dom';
import close from '../images/icon-close.svg'
import { slide as Menu } from 'react-burger-menu';


export default function Hamburg(){
    return(
        <Menu isOpen={true} width={ '300px' } right className="ham-container">
            <img src={close} alt='closeicon' className='close'/>  
            <Link to="/collections" className="ham-link">Collections</Link>
            <Link to="/men" className="ham-link">Men</Link>
            <Link to="/women" className="ham-link">Women</Link>
            <Link to="/about" className="ham-link">About</Link>
            <Link to="/contact" className="ham-link">Contact</Link>
        </Menu >
    )
}