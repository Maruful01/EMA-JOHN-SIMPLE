import React from 'react';
import './header.css'
import Logo from '../logo.png';

const Header = () => {
    return (
        <div className="header">
             <img  className='logo' src={Logo} alt=""/>
             <nav className="nav-bar">
                 <a href="/shop">Shop</a>
                 <a href="/review">Order Review</a>
                 <a href="/manage">Manage Inventory</a>
             </nav>
        </div>
    );
};

export default Header;