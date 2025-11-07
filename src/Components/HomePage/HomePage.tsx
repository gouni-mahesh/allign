import React from "react";
import "./homePage.css";
import LadyImage from "../../assets/banner-thumb 1.png";

const HomePage: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* ---------- LEFT CONTENT ---------- */}
        <div className="hero-content">
          <p className="hero-tagline">Designing For The Future</p>

          <h1 className="hero-heading">
            Scale Your <span className="text-blue">Business</span> <br />
            Growth & Revenue To <br />
            The <span className="text-blue">Next Level</span>
          </h1>

          <p className="hero-description">
            Lorem ipsum dolor sit amet consectetur. Faucibus tempus vulputate condimentum.
          </p>

          <button className="hero-button">Get Started</button>
        </div>

        {/* ---------- RIGHT IMAGE PLACEHOLDER ---------- */}
        <div className="hero-image-wrapper">
          <img
            src={LadyImage}
            alt="Hero Placeholder"
            className="hero-image"
          />
          <div className="hero-accent-circle"></div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
