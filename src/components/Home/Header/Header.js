import React from 'react';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import './Header.css'
const Header = () => {
    return (
        <div className="hero-section">
            <Navigation/>
            <Banner/>
        </div>
    );
};

export default Header;