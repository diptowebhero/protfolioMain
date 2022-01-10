import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <div id="contact" className="contact-section mt-5">
        <Container>
          <h1 className="text-center mb-4 fw-bold">GET IN TOUCH</h1>
          <Row className="align-items-center">
            <Col md={6} sm={12}>
              <div className="address">
                <div>
                  <h2 className="fw-bold fs-1">DON'T BE SHY</h2>
                  <p>
                    Feel free to get in touch with me. I am always open to
                    discussing new projects, creative ideas or opportunities to
                    be part of your visions.
                  </p>
                </div>
                <div>
                  <div className="mt-4 d-flex align-items-center">
                    <div>
                    <i class="fas fa-map"></i>
                    </div>
                    <div className="mx-3">
                      <p className="m-0">ADDRESS POINT</p>
                      <p className="m-0">Goainghat,Sylhet-3100</p>
                    </div>
                  </div>
                  <div className="mt-4 d-flex align-items-center">
                    <div>
                      <i class="fas fa-phone-alt"></i>
                    </div>
                    <div className="mx-3">
                      <p className="m-0">CALL ME</p>
                      <p className="m-0">+8801647025521</p>
                    </div>
                  </div>
                  <div className="mt-4 d-flex align-items-center">
                    <div>
                    <i class="fas fa-envelope"></i>
                    </div>
                    <div className="mx-3">
                      <p className="m-0">MAIL ME</p>
                      <p className="m-0">diptodas1672@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <form action="https://formsubmit.co/diptodas1672@gmail.com" method="POST">
                <Row className="input-container">
                  <Col md={6} sm={12}>
                    <div className="styled-input">
                      <input type="text" required placeholder="Your Name" name="name"/>
                    </div>
                  </Col>
                  <Col md={6} sm={12}>
                    <div className="styled-input" style={{ float: "right" }}>
                      <input type="email" required placeholder="Your Email" name="email"/>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="styled-input wide">
                      <textarea required placeholder="Send Message" name="message"/>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <button className="btn-contact submit-btn btn-main">
                      Send Message
                    </button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
