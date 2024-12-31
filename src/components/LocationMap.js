import React from "react";

function LocationMap() {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      {/* Heading */}
      <h1 style={{ fontSize: "20px", marginBottom: "20px" ,fontWeight:"600px"}}>
        Blulife products are available in Bangalore 
        <span style={{ fontWeight: "400" }}>
          (Shri Lakshmi Water Purifiers, TC Palya, Bangalore-560036)
        </span>
      </h1>

      {/* Embedded Google Map */}
      <div style={{ width: "100%", height: "400px", display: "flex", justifyContent: "center" }}>
        <iframe
          title="Blulife Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2096543398234!2d77.69508227507735!3d13.022316987297748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11668ba15beb%3A0x6e5db12464356e13!2sSHRI%20LAKSHMI%20WATER%20PURIFIERS!5e0!3m2!1sen!2sin!4v1735322284468!5m2!1sen!2sin"
          //  width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          style={{ border: "0", width: "90%", height: "100%" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default LocationMap;
