import React from "react";
import "./team.css";
// import TeamMember1 from '../../assest/images/5e01b147c7c7c07bd15440ec3796ec3113150e5d.png'
// import Img2 from '../assest/images/Img 2.png';
// import Img4 from '../assest/images/Img 4.png';
// import Img3 from '../assest/images/Img 3.png';



type TeamProps = {
  name?: string;
  members?: string[];
};

const Team: React.FC<TeamProps> = () => {
  return (
    <div className="heroSection10">
      {/* <div className="frameParent">
        <div className="button2Parent">
          <div className="button2">
            <div className="designingForThe">DESIGNING FOR THE FUTURE</div>
          </div>
          <div className="weveExclusiveTeamMemberWrapper">
            <div className="weveExclusiveTeamContainer">
              <span>{`We’ve `}</span>
              <b>Exclusive Team</b>
              <span> Member</span>
            </div>
          </div>
        </div>

        <div className="frameGroup">
          <div className="parent">
            <img className="icon" src={TeamMember1} alt="Devan Lane" />
            <div className="devanLaneParent">
              <b className="devanLane">Devan Lane</b>
              <div className="marketingDepartment">Marketing Department</div>
            </div>
          </div>

          <div className="group">
             <img className="icon" src={Img2} alt="Devan Lane" />
            <div className="darrelStewardParent">
              <b className="devanLane">Darrel Steward</b>
              <div className="itDepartment">IT Department</div>
            </div>
          </div>

          <div className="parent">
         <img className="icon" src={Img4} alt="Devan Lane" />
            <div className="bessieCooperParent">
              <b className="devanLane">Bessie Cooper</b>
              <div className="marketingDepartment">Software Development</div>
            </div>
          </div>

          <div className="parent">
           <img className="icon" src= {Img3} alt="Devan Lane" />
            <div className="devanLaneParent">
              <b className="devanLane">John Doe</b>
              <div className="marketingDepartment">Marketing Department</div>
            </div>
          </div>
        </div>
      </div>

      <div className="buttunIcon" /> */}
    </div>
  );
};

export default Team;
