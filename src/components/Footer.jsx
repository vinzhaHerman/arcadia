import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Arcadia Checkpoint Co.</h3>
                    <p>Restoring childhood memories, one pixel at a time.</p>
                </div>
                <div className="footer-section">
                    <h3>Connect</h3>
                    <ul className="social-links">
                        <li><a href="#">INSTAGRAM</a></li>
                        <li><a href="#">TWITTER</a></li>
                        <li><a href="#">DISCORD</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Visit</h3>
                    <p>123 Retro Lane, Sector 7</p>
                    <p>Neo-Tokyo, NT 90210</p>
                </div>
            </div>
            <div className="copyright">
                &copy; {new Date().getFullYear()} ARCADIA CHECKPOINT CO. ALL RIGHTS RESERVED.
            </div>
        </footer>
    );
};

export default Footer;
