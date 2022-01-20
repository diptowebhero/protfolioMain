import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import bannerImg from "../../../assets/Saly-13.png";
import Fade from "react-reveal/Fade";
const Banner = () => {
  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Container className="mt-5">
      <Particles
        class="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#000",
            },
            links: {
              color: "#000",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <Row className="w-100 mx-auto banner align-items-center">
        <Col lg={6} md={12} sm={12}>
          <Fade left duration={2000} distance="40px">
            <div className="banner-text">
              <h2>Hi, I'm</h2>
              <h2>Dipto Das</h2>
              <h3>
                I'm{" "}
                <span className="highlight">
                  <Typewriter
                    words={[
                      "React Developer",
                      "Front-End Developer",
                      "A Self Believer",
                    ]}
                    loop={10}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h3>
              <p>
                A self-motivated and enthusiastic web developer. To gain
                confidence and fame using my potential in the field of web
                development and express my innovative creative skills for self
                and company growth. I always like to learn new things and have
                experience with new stuff.
              </p>

              <a href="https://drive.google.com/u/0/uc?id=1iR2RQKQPD0q2rzouoSqSsDYVANYtsH_i&export=download">
                <Button className="btn-banner" variant="">
                  Resume
                </Button>
              </a>
            </div>
          </Fade>
        </Col>
        <Col lg={6} md={12} sm={12}>
          <Fade right duration={2000} distance="40px">
            <img src={bannerImg} className="images" alt="" />
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
