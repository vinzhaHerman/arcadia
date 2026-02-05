import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('TRANSMISSION SENT! WE WILL RESPOND SHORTLY.');
    };

    return (
        <section className="contact" id="contact">
            <h2 className="section-title">CONTACT_BASE</h2>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>&gt; LOCATION_DATA</h3>
                    <p>ARCADE CHECKPOINT CO.</p>
                    <p>123 Pixel Blvd, Level 4</p>
                    <p>Retro City, RC 55555</p>
                    <br />
                    <h3>&gt; COMMS_CHANNEL</h3>
                    <p>HELLO@ARCADIA.CO</p>
                    <p>(555) 867-5309</p>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>PLAYER_NAME</label>
                        <input type="text" placeholder="ENTER NAME" required />
                    </div>
                    <div className="form-group">
                        <label>EMAIL_ADDRESS</label>
                        <input type="email" placeholder="ENTER EMAIL" required />
                    </div>
                    <div className="form-group">
                        <label>MISSION_BRIEF</label>
                        <textarea rows="5" placeholder="DESCRIBE YOUR ISSUE" required></textarea>
                    </div>
                    <button type="submit">SEND_TRANSMISSION</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
