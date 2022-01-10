import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import aboutImg from "../../../assets/dip.png";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} sm={12}>
            <Fade right duration={2000} distance="40px">
              <img src={aboutImg} className="img fluid" alt="" />
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left duration={2000} distance="40px">
              <div>
                <h2>About Me</h2>
                <p>
                  I am a JUNIOR WEB Developer. I am working with HTML5, CSS3 ,
                  JavaScript (ES6) React, Node.js and MongoDB. I am a quick
                  learner. I believe in hard work and efficiency. That's why I
                  am always ready to accomplish any task by working hard. I
                  always focus on learning new technology. My goal is to become
                  A World-Class Professional Web Developer.
                </p>
              </div>
              <div className="social-container">
                <a href="https://github.com/diptowebhero" target="_blank" rel="noreferrer" className="social">
                <i class="fab fa-github"></i>
                </a>
                <a href="https://www.facebook.com/dipto.das.52438/" target="_blank" rel="noreferrer" classclassName="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=diptodas1672@gmail.com" target="_blank" rel="noreferrer" className="social">
                <i class="fas fa-envelope"></i>
                </a>
                <a href="https://www.linkedin.com/in/dipto-das-617901216/" target="_blank" rel="noreferrer" className="social">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
              
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
