import React from "react";
import "./SupportForm.css";

const SupportForm = () => {
  return (
    <div className="support-container">
       <h1 style={{ marginBottom: "20px" }}>Our Team is Ready to Support our Customers 24/7</h1>
      {/* Add the rest of your form components here */}
    
      
    
    <div style={{ display: "flex", width: "80%", margin: "auto", gap: "10px" }}>
                <div style={{ width: "50%" }}>
                    <div className="left-side">
                        <div className="form-row">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input type="text" id="fullName" className="form-input" />
                        </div>
                        <div className="form-row">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input type="text" id="phoneNumber" className="form-input" />
                        </div>
                        <div className="form-row">
                            <label htmlFor="city" className="form-label">City</label>
                            <input type="text" id="city" className="form-input" />
                        </div>
                    </div>
                </div>
                <div style={{ width: "50%" }}>
                    <div style={{ width: "100%" }}>
                        <div className="right-side" style={{ display: "flex", gap: "2px" }}>
                            <label htmlFor="summary" className="form-label">Summary</label>
                            <textarea
                                id="summary"
                                className="summary-textarea"
                                style={{ width: "100%", minHeight: "100px", marginTop: "0px",marginRight:"0px" }}
                            ></textarea>
                        </div>
                        <div style={{ textAlign: "end", marginTop: "10px" }}>
                        <button style={{ fontWeight:"800",color:"#004AAD",background:"transparent",padding:"0" }} className="">Submit</button>
                        
                    </div>
                    </div>
                    
                </div>


            </div>      </div>
  );
};

export default SupportForm;
