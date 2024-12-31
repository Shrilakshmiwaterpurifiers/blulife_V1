import React from "react";
import "./SalesAdvisor.css";

const SalesAdvisor = () => {
  return (
    <div className="container">
      <div className="title-section">
        <h1>Join with us as <span>Sales Advisor</span></h1>
      </div>
      <div className="content-section">
        <div className="image-section"></div>
        <div className="form-section">
          <h2>Join with us as <span>Marketing Executive / Sales Advisor</span></h2>
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
          <button style={{ fontWeight:"800",color:"#000000",background:"transparent",padding:"1 rem",marginTop:"0px",marginLeft:"40rem"}} className="">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SalesAdvisor;
