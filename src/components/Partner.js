import React from 'react';
import './Partner.css';
// import handshake from '../'; // Adjust path if needed

const Partner = () => {
  return (
    <div className="partner-wrapper">
      {/* Intro Content */}
      <div className="intro-content">
        <h2>Partner with bluLife now</h2>
        <p>
          Blulife's partnership with Oshoppe offers customers a seamless in-store and digital
          experience, allowing them to explore products, purchase online, receive same-day
          delivery and installation, and enjoy benefits and rewards through both physical and
          digital platforms.
        </p>
      </div>

      {/* Main Content: Image + Form */}
      <div className="partner-container">
        {/* Left Section: Image */}
        <div className="partner-image">
          <img src={"/handshake.png"} alt="Partnership"  />
        </div>

        {/* Right Section: Form */}
        <div className="partner-form-section">
          <h3>Join Now with BluLife</h3>
          <form>
            <div className="fields">

            <label htmlFor="fullName">Full Name	&nbsp; &nbsp; &nbsp;	&nbsp; 	&nbsp;	&nbsp;	&nbsp;</label>
            <input type="text" id="fullName" name="fullName" placeholder="" required />

            </div>
            <div className="fields">
            <label htmlFor="phoneNumber">Phone Number &nbsp;</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="" required />
          </div>
          <div className="fields">
            <label htmlFor="city">City &nbsp;	&nbsp; &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;</label>
            <input type="text" id="city" name="city" placeholder="" required />
           </div>
          <button style={{ fontWeight:"800",color:"#FFFFFF",background:"transparent",padding:"1 rem",marginTop:"0px",marginLeft:"40rem"}} className="">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Partner;
