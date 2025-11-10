import React from "react";
import employee1 from "../../assets/images/employee1.png";
import employee2 from "../../assets/images/employee2.png";
import "./joinourteam.css";
const JoinOurTeam = () => {
  return (
    <div>
      <section className="join-section">
        <div className="join-content">
          <span className="tag">Career</span>
          <h1 className="title">Join Our Team</h1>
          <p className="description">
            Discover a rewarding career journey with us. We offer exciting
            opportunities, a collaborative environment, and the chance to make a
            meaningful impact in the world of IT Consulting.
          </p>
          <button className="career-btn">Career Opportunities</button>
        </div>

        <div className="images">
          <img src={employee1} alt="Employee1" className="img img-top" />
          <img src={employee2} alt="Employee2" className="img img-bottom" />
        </div>
      </section>
    </div>
  );
};

export default JoinOurTeam;
