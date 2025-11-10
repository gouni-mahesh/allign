import React from "react";
import "./benefitssection.css";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Development",
      text: "We strive to support and nurture our employees. Professional growth and learning are our priorities.",
      active: false,
    },
    {
      title: "Innovation",
      text: "We strive to support and nurture our employees. Professional growth and learning are our priorities.",
      active: true,
    },
    {
      title: "Team Spirit",
      text: "We strive to support and nurture our employees. Professional growth and learning are our priorities.",
      active: false,
    },
  ];

  return (
    <div className="benefits-section">
      <h2 className="benefits-title">
        Benefits Of <br />
        <span>Working at Tech</span>
      </h2>
      <div className="underline"></div>

      <div className="benefits-container">
        {benefits.map((item, index) => (
          <div
            key={index}
            className={`benefit-card ${item.active ? "active" : ""}`}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
