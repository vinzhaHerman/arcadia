import React from 'react';
import './Gallery.css';

const Gallery = () => {
    // Mock data with CSS-based placeholders
    const galleryItems = [
        { id: 1, title: "GameBoy Color", desc: "Backlit Mod", color: "#663399" },
        { id: 2, title: "PS1", desc: "Full Restoration", color: "#888888" },
        { id: 3, title: "N64", desc: "RGB Mod", color: "#222222" },
        { id: 4, title: "Sega Genesis", desc: "Capacitor Replacement", color: "#111111" }
    ];

    return (
        <section className="gallery" id="gallery">
            <h2 className="section-title">HALL_OF_FAME</h2>
            <div className="gallery-scroll">
                {galleryItems.map((item) => (
                    <div className="gallery-item" key={item.id}>
                        <div className="gallery-img-placeholder" style={{ backgroundColor: item.color }}>
                            <div className="scanline-overlay"></div>
                            <span className="placeholder-text">IMG_0{item.id}</span>
                        </div>
                        <div className="gallery-info">
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
