import React from 'react';
import './getInTouch.css';

const GetInTouchSection: React.FC = () => {
    return (
        <section className="get-in-touch-section-container">
            {/* Decorative blue background shape */}
            <div className="blue-background-shape"></div>

            {/* Left promotional content area */}
            <div className="left-promo-content">
                <span className="promo-tag">DESIGNING FOR THE FUTURE</span>
                <h2 className="promo-title">
                    Scale Your Brightness <br />& Revenue To The Next
                </h2>
                <p className="promo-description">
                    In today's competitive business, the demand for efficient and cost-effective <br /> IT solutions has never been more critical.
                </p>

                <div className="promo-features">
                    <div className="feature-group">
                        <div className="feature-item">
                            {/* Placeholder for icon/image for "Organizations and recognized work" */}
                            {/* <img src="path/to/icon1.png" alt="Icon 1" className="feature-icon" /> */}
                            <span>Organizations and <br /> recognized work</span>
                        </div>
                        <div className="feature-item">
                            <span className="checkmark">✓</span>
                            <span>Dedicated Tech Services</span>
                        </div>
                    </div>

                    <div className="feature-group">
                        <div className="feature-item">
                            {/* Placeholder for icon/image for "Organizations and recognized work" */}
                            {/* <img src="path/to/icon2.png" alt="Icon 2" className="feature-icon" /> */}
                            <span>Organizations and <br /> recognized work</span>
                        </div>
                        <div className="feature-item">
                            <span className="checkmark">✓</span>
                            <span>Dedicated Tech Services</span>
                        </div>
                    </div>
                </div>
                <button className="get-started-button">Get Started</button>
            </div>

            {/* Right contact form area */}
            <div className="right-contact-form-card">
                <button className="contact-us-button">Contact Us</button>
                <h3 className="form-title">Get In Touch</h3>
                <p className="form-description">
                    For Your Car We Will Do Everything Advice Design In Us <br /> Repairs And Maintenance. We Are The Some
                </p>

                <form className="contact-form">
                    <input type="text" placeholder="Your Name" className="form-input" />
                    <input type="email" placeholder="Your Email" className="form-input" />
                    <input type="tel" placeholder="Your Phone" className="form-input" />
                    <input type="text" placeholder="Your Subject" className="form-input" />
                    <textarea placeholder="Message" rows={5} className="form-textarea"></textarea>
                    <button type="submit" className="submit-now-button">Submit Now</button>
                </form>
            </div>
        </section>
    );
};

export default GetInTouchSection;