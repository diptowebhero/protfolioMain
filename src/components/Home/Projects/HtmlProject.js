import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import img1 from "../../../assets/html-project/project1.png";
import img2 from "../../../assets/html-project/project2.png";
import img3 from "../../../assets/html-project/project3.png";
const HtmlProject = () => {
  return (
    <div className="main-section">
      <Container className="mt-5">
        <Fade bottom duration={2500} distance="40px">
          <Row xs={1} md={3} className="g-4 mt-4">
            <Col>
              <Card className="shadow-lg card-html-project">
                <div className="frame-img">
                  <Card.Img variant="top" src={img1} />
                </div>
                <Card.Body>
                  <Card.Title as="h2">Educafe</Card.Title>
                  <Card.Text as="p">Responsive Landing Page</Card.Text>
                  <Card.Text as="Button" className="btn-tech">
                    HTML5
                  </Card.Text>
                  <Card.Text as="Button" className="mx-1 btn-tech">
                    CSS3
                  </Card.Text>
                  <Card.Text as="Button" className="mt-2 btn-tech">
                    MEDIA QUERY
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a
                    href="https://educafe-main.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="btn-demo" variant="">
                      Live Link
                    </Button>
                  </a>
                  <a
                    href="https://github.com/diptowebhero/Educafe-main"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="btn-demo mx-1" variant="">
                      GitHub
                    </Button>
                  </a>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card className="shadow-lg card-html-project">
                <div className="frame-img">
                  <Card.Img variant="top" src={img2} />
                </div>
                <Card.Body>
                  <Card.Title as="h2">BESNIC Landing Page</Card.Title>
                  <Card.Text as="p">Responsive Landing Page</Card.Text>
                  <Card.Text as="Button" className="btn-tech">
                    HTML5
                  </Card.Text>
                  <Card.Text as="Button" className="mx-1 btn-tech">
                    CSS3
                  </Card.Text>
                  <Card.Text as="Button" className="mt-2 btn-tech">
                    MEDIA QUERY
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a
                    href="https://besnic.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="btn-demo" variant="">
                      Live Link
                    </Button>
                  </a>
                  <a
                    href="https://github.com/diptowebhero/besnic-landing-page"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="btn-demo mx-1" variant="">
                      GitHub
                    </Button>
                  </a>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card className="shadow-lg card-html-project">
                <div className="frame-img">
                  <Card.Img variant="top" src={img3} />
                </div>
                <Card.Body>
                  <Card.Title as="h2">FUSELY Landing Page</Card.Title>
                  <Card.Text as="p">Responsive Landing Page</Card.Text>
                  <Card.Text as="Button" className="btn-tech">
                    HTML5
                  </Card.Text>
                  <Card.Text as="Button" className="mx-1 btn-tech">
                    CSS3
                  </Card.Text>
                  <Card.Text as="Button" className="mt-2 btn-tech">
                    MEDIA QUERY
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a
                    href="https://fusely.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="btn-demo" variant="">
                      Live Link
                    </Button>
                  </a>
                  <a
                    href="https://github.com/diptowebhero/fusely-landing-page"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="btn-demo mx-1" variant="">
                      GitHub
                    </Button>
                  </a>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
};

export default HtmlProject;
