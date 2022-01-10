import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-section text-center p-3">
      <div className="social-container">
        <a
          href="https://github.com/diptowebhero"
          target="_blank"
          rel="noreferrer"
          className="social"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.facebook.com/dipto.das.52438/"
          target="_blank"
          rel="noreferrer"
          classclassName="social"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=diptodas1672@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="social"
        >
          <i class="fas fa-envelope"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/dipto-das-617901216/"
          target="_blank"
          rel="noreferrer"
          className="social"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
      <div>
        <p>Designed and Developed by <span>Dipto Das</span></p>
        <p className="copyright">Copyright © 2021, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
