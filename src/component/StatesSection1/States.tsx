import React from "react";
import "./states.css";

import img1 from "../../assets/images/one-l 1.png";
import img2 from "../../assets/images/two-l 1.png";
import img3 from "../../assets/images/three-l 1.png";
import img4 from "../../assets/images/four-l 1.png";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";

const States = () => {
  return (
    <div>
      <section className="stats-section">
        <div className="stats-row">
          <div className="stat-card">
            <div className="icon">
                 <img src={icon1} alt="Icon 1" />
            </div>
            <h2>200+</h2>
            <p>Team Member</p>
          </div>
          <div className="stat-card">
           <div className="icon">
                 <img src={icon2} alt="Icon 2" />
            </div>
            <h2>10k+</h2>
            <p>Team Member</p>
          </div>
          <div className="stat-card">
           <div className="icon">
                 <img src={icon3} alt="Icon 3" />
            </div>
            <h2>200+</h2>
            <p>Team Member</p>
          </div>
          <div className="stat-card">
           <div className="icon">
                 <img src={icon4} alt="Icon 4" />
            </div>
            <h2>200+</h2>
            <p>Team Member</p>
          </div>
        </div>

        <div className="image-row">
          <div>
            <img src={img1} alt="Img 1" />
          </div>
          <div>
            <img src={img2} alt="Img 2" />
          </div>
          <div>
            <img src={img3} alt="Img 3" />
          </div>
          <div>
            <img src={img4} alt="Img 4" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default States;
