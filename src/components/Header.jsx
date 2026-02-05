import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <div className="logo">
                <span className="logo-icon">👾</span>
                ARCADIA<span className="blink">_</span>
            </div>

            <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
                <ul className="nav-links">
                    <li><a href="#services" onClick={() => setIsOpen(false)}>SERVICES</a></li>
                    <li><a href="#gallery" onClick={() => setIsOpen(false)}>GALLERY</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>CONTACT</a></li>
                </ul>
                <button className="cta-small">START REPAIR</button>
            </nav>
        </header>
    );
};

export default Header;
