import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="containerr">
        <div className="row">
          {/* Links Container */}
          <div className="links-container">
            <h4>Links</h4>
            <ul>
              <li><a href="#">Domestic Water Purifiers</a></li>
              <li><a href="#">Domestic Water Purifiers Spare Parts</a></li>
              <li><a href="#">Commercial Water Purifiers</a></li>
              <li><a href="#">Commercial Water Purifiers Spare Parts</a></li>
              <li><a href="#">Other Products</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <FontAwesomeIcon icon={faClipboardCheck} className="icon" />
              <a href="tel:+91-7795453579">+91-7795453579</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <a href="mailto:shrilakshmiwaterpurifiers@gmail.com">
                shrilakshmiwaterpurifiers@gmail.com
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              <p>
                Shop No.3, First Floor, Kodi Krupa Complex,
                <br />
                TC Palya Main Road, Bangalore-560036
              </p>
            </li>
          </ul>
        </div>
      </div>

        {/* Copyright Section */}
        <div className="copyright">
          <p>&copy; All rights reserved @bluesky Enterprises</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
