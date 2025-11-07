import React from "react";
import "./partners.css";
import image1 from "../../assets/tech.jpg";
import image2 from "../../assets/tech_1.jpg";
import image3 from "../../assets/tech_2.jpg";

const Partners: React.FC = () => {
  return (
    <section className="body-section">
      <div className="body-header">
        <button className="future-btn">DESIGNING FOR THE FUTURE</button>
        <h1 className="main-title">
          <strong>Your Partner in Digital</strong> Success
        </h1>
      </div>

      <div className="cards-container">
        <div className="service-card">
          <img src={image1} alt="Mobile App Development" className="card-img" />
          <h6 className="card-title">Mobile App Development</h6>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, velit!
          </p>
          <a href="#" className="card-link">
            Get Services →
          </a>
        </div>

        <div className="service-card">
          <img src={image2} alt="Content Marketing" className="card-img" />
          <h6 className="card-title">Content Marketing</h6>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, velit!
          </p>
          <a href="#" className="card-link">
            Get Services →
          </a>
        </div>

        <div className="service-card">
          <img src={image3} alt="E-Commerce Solution" className="card-img" />
          <h6 className="card-title">E-Commerce Solution</h6>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, velit!
          </p>
          <a href="#" className="card-link">
            Get Services →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;