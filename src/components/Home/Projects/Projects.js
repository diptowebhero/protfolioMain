import { Card, Col, Container, Row, Button } from "react-bootstrap";
import img1 from "../../../assets/project-1.png";
import img2 from "../../../assets/project-2.png";
import img3 from "../../../assets/project-3.png";
import "./Projects.css";
import Fade from "react-reveal/Fade";
const Projects = () => {
  return (
    <div className="main-section">
      <Container className="mt-5">
        <Fade bottom duration={2500} distance="40px">
          <Row xs={1} md={3} className="g-4 mt-4">
            <Col>
              <Card className="shadow-lg">
                <div className="frame-img">
                  <Card.Img variant="top" src={img1} />
                </div>
                <Card.Body>
                  <Card.Title as="h2">Auto Repair Service</Card.Title>
                  <Card.Text as="p">
                    A full-stack single-page car repair website where people can
                    take and book services. Login system with firebase and
                    private routes. Dashboard for users and Admin can see the
                    different options from where Admin can add product add,
                    remove, confirm order, delete order and users can give
                    reviews and monitor their booking list.
                  </Card.Text>
                  <Card.Text as="Button" className="btn-tech">
                    React.js
                  </Card.Text>
                  <Card.Text as="Button" className="mx-1 btn-tech">
                    React Bootstrap
                  </Card.Text>
                  <Card.Text as="Button" className="mt-2 btn-tech">
                    Node.js
                  </Card.Text>
                  <Card.Text as="Button" className="btn-tech">
                    Express.js
                  </Card.Text>
                  <Card.Text as="Button" className="mt-2 mx-1 btn-tech">
                    MongoDB
                  </Card.Text>
                  <Card.Text as="Button" className="mt-2 btn-tech">
                    Firebase Authentication
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a
                    href="https://car-repair-shop-fe551.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="btn-demo" variant="">
                      Live Link
                    </Button>
                  </a>
                  <a
                    href="https://github.com/diptowebhero/auto-repair"
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
              <Card className="shadow-lg">
                <div className="frame-img">
                  <Card.Img variant="top" src={img2} />
                </div>
                <Card.Body>
                  <Card.Title as="h2">Bicycle Shop</Card.Title>
                  <Card.Text as="p">
                    A single-page bicycle-shop website where people can take and
                    book product. Login system with firebase and private routes.
                    Dashboard for users and Admin can see the different options
                    from where Admin can add product add, remove, confirm order,
                    delete order and users can give reviews and monitor their
                    booking list.
                  </Card.Text>
                  <Card.Text as="Button" className="btn-tech">
                    React.js
                  </Card.Text>
                  <Card.Text as="Button" className="mx-1 btn-tech">
                    React Bootstrap
                  </Card.Text>
                  <Card.Text as="Button" className="mt-2 btn-tech">
                    Node.js
                  </Card.Text>
                  <Card.Text as="Button" className="btn-tech">
                    Express.js
                  </Card.Text>
                  <Card.Text as="Button" className="mt-2 mx-1 btn-tech">
                    MongoDB
                  </Card.Text>
                  <Card.Text as="Button" className="mt-2 btn-tech">
                    Firebase Authentication
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a
                    href="https://supper-bicycle.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="btn-demo" variant="">
                      Live Link
                    </Button>
                  </a>
                  <a
                    href="https://github.com/diptowebhero/bicycle-shop"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="btn-demo mx-1" variant="">
                      Git Hub
                    </Button>
                  </a>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card className="shadow-lg">
                <div className="frame-img">
                  <Card.Img variant="top" src={img3} />
                </div>
                <Card.Body>
                  <Card.Title as="h2">Fitness Care Service</Card.Title>
                  <Card.Text as="p">
                    A single-page health care website . users will be able to
                    view the site and go to different routes,used be
                    accessibity. If the user wants to see the details of the
                    service, then he has to login with the email password
                  </Card.Text>
                  <Card.Text as="Button" className="btn-tech">
                    React.js
                  </Card.Text>
                  <Card.Text as="Button" className="mx-1 btn-tech">
                    React Bootstrap
                  </Card.Text>
                  <Card.Text as="Button" className="mt-2 btn-tech">
                    Firebase Authentication
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a
                    href="https://health-care-institute.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="btn-demo" variant="">
                      Live Link
                    </Button>
                  </a>
                  <a
                    href="https://github.com/diptowebhero/fitness-center"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="btn-demo mx-1" variant="">
                      Git Hub
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

export default Projects;
