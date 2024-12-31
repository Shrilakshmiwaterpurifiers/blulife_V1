import React from 'react';
import './ServiceEngineerForm.css'; // Updated CSS file name

const ServiceEngineer = () => {
  return (
    <div className="serviceengineer-wrapper"> 
      {/* Intro Content */}
      <div className="serviceengineer-intro-content">
        <h2>Join with us as <span>Service Engineer</span></h2>
        <p>
          Joining Blulife as a Service Engineer could provide excellent opportunities, such as a better salary, benefits, and even incentives like trips for top performers. Service Engineer roles often come with performance-based bonuses, and Blulife's expanding presence through partnerships like Oshoppe could offer you a platform to grow.
        </p>
      </div>

      {/* Main Content: Image + Form */}
      <div className="serviceengineer-container">
        {/* Left Section: Image */}
        <div className="serviceengineer-image">
          <img src={"/service-engineer.jpg"} alt="Partnership" />
        </div>

        {/* Right Section: Form */}
        <div className="serviceengineer-form-section">
          <h3>Join with us as Service Engineer / Technician</h3>
          <form>
            <div className="fieldss">

            <label htmlFor="fullName">Full Name	&nbsp; &nbsp; &nbsp;	&nbsp; 	&nbsp;	&nbsp;	&nbsp;</label>
            <input type="text" id="fullName" name="fullName" placeholder="" required />

            </div>
            <div className="fieldss">
            <label htmlFor="phoneNumber">Phone Number &nbsp;</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="" required />
          </div>
          <div className="fieldss">
            <label htmlFor="city">City &nbsp;	&nbsp; &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;</label>
            <input type="text" id="city" name="city" placeholder="" required />
           </div>
          <button style={{ fontWeight:"800",color:"#1E489B",background:"transparent",padding:"1 rem",marginTop:"0px",marginLeft:"40rem"}} className="">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceEngineer;