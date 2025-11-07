import React from "react";
import "./heroTrust.css";
import leftImage from "../../assets/about-14 1.png";
import eletronic1 from "../../assets/electonic-1.png"; 
import eletronic2 from "../../assets/electronic-2.png"; 

const HeroTrust: React.FC = () => {
  return (
    <section className="trust-hero">
      <div className="trust-container">
        {/* ============ LEFT ============ */}
        <div className="trust-left">
          <div className="trust-photo-card">
            <img src={leftImage} alt="Placeholder" className="trust-photo" />

            {/* Play triangle */}
            <div className="triangle-play" aria-hidden />
          </div>

          {/* Decorative scribble & cube (purely cosmetic) */}
          <div className="scribble" aria-hidden />
          <div className="cube" aria-hidden />
        </div>

        {/* ============ RIGHT ============ */}
        <div className="trust-right">
          <span className="pill">DESIGNING FOR THE FUTURE</span>

          <h1 className="trust-title">
            We <span className="bold">Prominent</span> <span className="bold">Truly</span> Trusted IT
            <br />
            Business <span className="bold">solutions</span>
          </h1>

          <p className="trust-sub">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum
            Has Been The Industry's Standard Dummy.
          </p>

          {/* Two features */}
          <div className="trust-features">
            <div className="feature">
              <div className="feature-icon" aria-hidden>
                <div className="brand-item">
                  <img src={eletronic1} alt="Feature 1" />
                </div>
              </div>
              <div className="feature-text">
                <div className="feature-title">Our Ambition</div>
                <div className="feature-desc">Lorem is Ipsum is simply is de is text Lorem</div>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon" aria-hidden>
                <div className="brand-item">
                  <img src={eletronic2} alt="Feature 2" />
                </div>
              </div>
              <div className="feature-text">
                <div className="feature-title">Our Purpose</div>
                <div className="feature-desc">Lorem is Ipsum is simply is de is text Lorem</div>
              </div>
            </div>
          </div>

          {/* Pills row */}
          <div className="trust-pills">
            <span className="soft-pill">
              <span className="dot dot-yellow" /> No hidden fees
            </span>
            <span className="soft-pill">
              <span className="dot dot-blue" /> 100% Security Guaranteed
            </span>
          </div>

          <button className="cta-primary">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default HeroTrust;