import React from 'react';
import logo from "./images/logo.png"


const Header = () => {
    return (
        <nav className='header'>
            <span>
                <img src={logo} alt='logo'/>
                <span>
                    <span className='B'>B</span>
                    <span className='S'>S</span>
                    <span className='A'>A</span> 
                </span>
            </span>
            <a href="#contact">
                <span>Contact & Address</span>
            </a>
        </nav>
    );
}



export default Header;