import React from 'react'
import "./careerList.css";

const jobs = [
  { title: "UI/UX Designer", location: "Remote", type: "Fulltime" },
  { title: "Q & A Engineer", location: "Remote", type: "Fulltime" },
  { title: "Software Engineer", location: "Remote", type: "Fulltime" },
]; 
const CareerList = () => {
  return (
    <div className="career-container">
      <button className="career-badge">Career List</button>
      <h2 className="career-title">Currently Available<br />Positions at Tech</h2>

      <div className="career-list">
        {jobs.map((job, index) => (
          <div key={index} className="career-card">
            <span className="job-title">{job.title}</span>
            <span className="job-location">{job.location}</span>
            <span className="job-type">{job.type}</span>
            <button className="apply-btn">Apply</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CareerList
