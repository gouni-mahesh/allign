import React from "react";
import "./brandStrip.css";
import cbre from "../../assets/cbre.png";
import align from "../../assets/align.png";
import abbvie from "../../assets/abbvie.png";
import ceridian from "../../assets/Ceridian HCM Holding Inc..png";
import amazon from "../../assets/amazon.png";


const BrandStrip: React.FC = () => {
  return (
    <section className="brand-strip">
      <div className="brand-row">
        <div className="brand-item"><img src={cbre} alt="CBRE" /></div>
        <div className="brand-item"><img src={abbvie} alt="Abbvie" /></div>
        <div className="brand-item"><img src={ceridian} alt="Ceridian" /></div>
        <div className="brand-item"><img src={amazon} alt="Amazon" /></div>
        <div className="brand-item"><img src={align} alt="Align" /></div>
      </div>
    </section>
  );
};

export default BrandStrip;
