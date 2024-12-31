import React from "react";

function LocationMapp() {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      {/* Heading */}
      <h1 style={{ fontSize: "20px", marginBottom: "20px" ,fontWeight:"600px"}}>
      Blulife Products are Available in Anakapalli, Visakhapatnam  
        <span style={{ fontWeight: "400" }}>
          (Shri Lakshmi Water Purifiers, Kothuru Panchayat Office, Anakapalli-531001)
        </span>
      </h1>

      {/* Embedded Google Map */}
      <div style={{ width: "100%", height: "400px", display: "flex", justifyContent: "center" }}>
        <iframe
          title="Blulife Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.2705420246475!2d82.98583667517178!3d17.684675283254037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a397190917ca1ab%3A0x28e981ed908cbcd2!2sSHRI%20LAKSHMI%20WATER%20PURIFIERS!5e0!3m2!1sen!2sin!4v1735322614888!5m2!1sen!2sin"
          //  width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade
          //  width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          style={{ border: "0", width: "90%", height: "100%" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default LocationMapp;
