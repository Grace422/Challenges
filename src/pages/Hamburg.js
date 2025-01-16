import React from "react";
import { Link } from 'react-router-dom';
import close from '../images/icon-close.svg'
// import { slide as Menu } from 'react-burger-menu';


export default function Hamburg({ closeHamburg }){
    return(
        <div className="ham-container">
            <img src={close} alt='closeicon' className='close' onClick={closeHamburg}/>  
            <Link to="/collections" className="ham-link" onClick={closeHamburg}>Collections</Link>
            <Link to="/men" className="ham-link" onClick={closeHamburg}>Men</Link>
            <Link to="/women" className="ham-link" onClick={closeHamburg}>Women</Link>
            <Link to="/about" className="ham-link" onClick={closeHamburg}>About</Link>
            <Link to="/contact" className="ham-link" onClick={closeHamburg}>Contact</Link>

            <div className="blur-effect" onClick={closeHamburg}></div>
        </div>
    )
}