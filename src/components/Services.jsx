import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: "CONSOLE_REPAIR",
            icon: "🔧",
            description: "From Red Ring of Death to drifting Joy-Cons. We perform board-level repairs to bring your hardware back to life.",
            price: "FROM $40"
        },
        {
            title: "MODDING_&_UPGRADES",
            icon: "⚡",
            description: "HDMI mods, IPS screen replacements, and battery upgrades. Modernize your vintage experience.",
            price: "FROM $60"
        },
        {
            title: "DEEP_CLEANING",
            icon: "✨",
            description: "Complete disassembly and ultrasonic cleaning. We banish 20 years of dust and grime.",
            price: "FROM $30"
        },
        {
            title: "DISC_RESURFACING",
            icon: "💿",
            description: "Professional resurfacing to save your scratched discs. Make them readable again.",
            price: "$5 / DISC"
        }
    ];

    return (
        <section className="services" id="services">
            <h2 className="section-title">OUR_SERVICES</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="card-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <div className="price-tag">{service.price}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
