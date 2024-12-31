import React from "react";
import "./TalkToUs.css";

const TalkToUs = () => {
  return (
    <div className="talk-to-us-container">
      <h1 className="header">Talk to Us</h1>
      <div className="card-container">
        <div className="card yellow-card">
          <p>Connect with<br />Sales Team</p>
        </div>
        <div className="card grey-card">
          <p>Connect with<br />Support Team</p>
        </div>
        <div className="card blue-light-card">
          <p>Would you like to<br />Become<br />An Investor</p>
        </div>
        <div className="card blue-dark-card">
          <p>Our<br />Blogs / Presentations</p>
        </div>
      </div>
    </div>
  );
};

export default TalkToUs;
