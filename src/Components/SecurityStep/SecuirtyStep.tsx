import React from "react";
import "./securitystep.css";
// Import local images
import step1 from "../../assets/images/securitystep1.png";
import step2 from "../../assets/images/securitystep2.png";
import step3 from "../../assets/images/securitystep3.png";

const SecuirtyStep = () => {
  return (
    <div>
       <section className="steps-section">
      <div className="steps-header">
        <button className="design-btn">DESIGNING FOR THE FUTURE</button>
        <h2>
          <strong>Become</strong><span><strong>Totally </strong>Secured</span><strong> by</strong> <br /> Following{" "}
          <span><strong>3 Steps</strong></span>
        </h2>
      </div>

      <div className="steps-container">
        {/* Step 1 */}
        <div className="step-card">
          <div className="step-image">
            <img src={step1} alt="Step 1" />
            <div className="step-number">01</div>
          </div>
          <h3>Chose security Package</h3>
          <p>
            Far far away, behind the word mountains and Consonantia, there live
            the
          </p>
        </div>

        {/* Step 2 */}
        <div className="step-card">
          <div className="step-image">
            <img src={step2} alt="Step 2" />
            <div className="step-number">02</div>
          </div>
          <h3>Chose security Package</h3>
          <p>
            Far far away, behind the word mountains and Consonantia, there live
            the
          </p>
        </div>

        {/* Step 3 */}
        <div className="step-card">
          <div className="step-image">
            <img src={step3} alt="Step 3" />
            <div className="step-number">03</div>
          </div>
          <h3>Chose security Package</h3>
          <p>
            Far far away, behind the word mountains and Consonantia, there live
            the
          </p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default SecuirtyStep;
