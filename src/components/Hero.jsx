import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="blink-fast">&gt;</span> RESPAWN YOUR<br />
                    <span className="highlight">MEMORIES</span>
                </h1>
                <p className="hero-subtitle">
                    Specialized repair & restoration for vintage gaming hardware.
                    We fix what Nintendon't.
                </p>
                <div className="hero-actions">
                    <button className="cta-large">START_GAME</button>
                    <button className="cta-secondary">VIEW_SERVICES</button>
                </div>
            </div>
            <div className="hero-visual">
                {/* CSS-based Retro Graphic Placeholder */}
                <div className="crt-monitor">
                    <div className="screen">
                        <div className="scanlines"></div>
                        <div className="glitch-box">
                            <span className="pixel-icon">🎮</span>
                            SYSTEM READY
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
