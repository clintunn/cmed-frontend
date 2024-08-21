import React from "react";
import { Row, Col, Container, Button, Card, Carousel } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faDiagnoses, faMedkit, faCalendarCheck, faEnvelope, faPhone, faMapMarkerAlt, faUserMd, faQuoteLeft, faFileAlt } from '@fortawesome/free-solid-svg-icons';
// import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import ScrollAnimation from "../Assets/ScrollAnimation";
import "./Home.css";


function Home() {
  return (
    <Container fluid className="p-0">
      <div className="home-hero">
        <Row className="justify-content-center align-items-center h-100 m-0">
          <Col md={8} className="text-center">
            <h1 className="mb-4">Cloud Based Implementation of Artificial Intelligence to Healthcare Services</h1>
            <p className="lead mb-5">A web application developed as part of this research which serves as proof, highlighting the ground-breaking impact that AI and cloud computing can have on healthcare services.</p>
            <LinkContainer to='/login'>
            <Button variant="dark" size="lg">Get Started</Button>
            </LinkContainer>
          </Col>
        </Row>
      </div>

    <ScrollAnimation>
      <div className="features-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center mb-5">
              <h2 className="section-title">Features</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={6} lg={3} className="feature-item mb-4">
              <div className="feature-icon mb-3">
                <FontAwesomeIcon icon={faRobot} />
              </div>
              <h3 className="feature-title">AI Diagnosis</h3>
              <p>AI for assissting with diagnosis</p>
            </Col>
            <Col md={6} lg={3} className="feature-item mb-4">
              <div className="feature-icon mb-3">
                <FontAwesomeIcon icon={faDiagnoses} />
              </div>
              <h3 className="feature-title">Digital Healthcare</h3>
              <p>Healthcare services made easier with technology</p>
            </Col>
            <Col md={6} lg={3} className="feature-item mb-4">
              <div className="feature-icon mb-3">
                <FontAwesomeIcon icon={faMedkit} />
              </div>
              <h3 className="feature-title">Consultations</h3>
              <p>Consultations online with healthcare providers</p>
            </Col>
            <Col md={6} lg={3} className="feature-item mb-4">
              <div className="feature-icon mb-3">
                <FontAwesomeIcon icon={faCalendarCheck} />
              </div>
              <h3 className="feature-title">Appointments</h3>
              <p>Schedule and manage appointments with healthcare providers</p>
            </Col>
          </Row>
        </Container>
      </div>
      </ScrollAnimation>

    <ScrollAnimation>
      <div className="cta-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h2 className="cta-title">Ready to Take Control of Your Health?</h2>
              <p className="cta-text">This project aims to enable users have an improved access to healthcare, and also help healthcare providers in the delivery of healthcare services to patients. The major objective is to make healthcare easier.</p>
              <p className="cta-text">Log in to explore the system</p>
              <LinkContainer to='/login'>
              <Button variant="dark" >Login Now</Button>
              </LinkContainer>
            </Col>
            <Col md={6}>
              <div className="cta-image-container">
                <FontAwesomeIcon icon={faUserMd} className="cta-icon" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      </ScrollAnimation>
    
      <ScrollAnimation>
      <div className="research-paper-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center mb-5">
              <h2 className="section-title">Research Paper</h2>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h3>Cloud Based Implementation of Artificial Intelligence to Healthcare Services in School Communities</h3>
              <p>This research paper explores the revolutionary integration of AI and cloud computing in healthcare services. It delves into the methodologies, challenges, and potential benefits of implementing AI-driven solutions in a cloud environment to enhance healthcare delivery.</p>
              <p>The aim of this project is to design and implement the application of artificial intelligence to healthcare services in school communities on the cloud.</p>
              <p>The objectives include: </p>
              <ul>
                <li>The study and investigation of the application of artificial intelligence to healthcare services in school communities.</li>
                <li>The design of a system for implementing the application of artificial intelligence to healthcare services in school communities</li>
                <li>Modelling a database based on functional and performance requirement</li>
                <li>Implementation of the proposed system</li>
              </ul>
              <Button variant="dark" href="https://drive.google.com/file/d/your-file-id/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download Research Paper
              </Button>
            </Col>
            <Col md={6}>
              <div className="research-paper-image">
                <FontAwesomeIcon icon={faFileAlt} className="research-icon" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </ScrollAnimation>

    {/* <ScrollAnimation>
      <div className="testimonial-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center mb-5">
              <h2 className="section-title">What Our Users Say</h2>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="testimonial-card h-100">
                <Card.Body>
                  <FontAwesomeIcon icon={faQuoteLeft} className="testimonial-quote" />
                  <Card.Text>
                    "This Health Management System has completely transformed my approach to wellness. I've never felt better!"
                  </Card.Text>
                  <Card.Title>Bakare Korede</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Computer Science student, Chrisland University</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="testimonial-card h-100">
                <Card.Body>
                  <FontAwesomeIcon icon={faQuoteLeft} className="testimonial-quote" />
                  <Card.Text>
                    "The AI diagnosis assisstance feature has been revolutionary! The incorporation of AI to the health sector makes work easier"
                  </Card.Text>
                  <Card.Title>Agbi David</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Health Staff, Chrisland University</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="testimonial-card h-100">
                <Card.Body>
                  <FontAwesomeIcon icon={faQuoteLeft} className="testimonial-quote" />
                  <Card.Text>
                    "Campus med has been very helpful when it comes to appointment scheduling with healthcare staff"
                  </Card.Text>
                  <Card.Title>Udezuka Tovia</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Nursing Student, Chrisland University</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      </ScrollAnimation> */}

      <ScrollAnimation>
        <div className="demo-section py-5">
          <Container>
            <Row className="justify-content-center">
              <Col md={8} className="text-center mb-5">
                <h2 className="section-title">Application Preview</h2>
                <p className="lead">Explore key features of our AI-powered healthcare management system</p>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col lg={6} className="mb-4 mb-lg-0">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('../Assets/aichat.png')}
                      alt="AI Diagnosis"
                    />
                    <Carousel.Caption>
                      <h3>AI-Assisted Diagnosis</h3>
                      <p>Advanced algorithms to support healthcare providers</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('../Assets/Dashboard pro.png')}
                      alt="Dashboard"
                    />
                    <Carousel.Caption>
                      <h3>Dashboard</h3>
                      <p>Easy-to-use interface for managing health information</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('../Assets/Con N.png')}
                      alt="Appointment Scheduling"
                    />
                    <Carousel.Caption>
                      <h3>Consultations</h3>
                      <p>Consultation between patients and providers</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col lg={6}>
                <h3>Experience the Future of Healthcare</h3>
                <p>This application showcases cutting-edge features in healthcare management:</p>
                <ul>
                  <li>AI-assisted diagnosis and symptom checker</li>
                  <li>Secure patient data management</li>
                  <li>Intuitive appointment scheduling</li>
                  <li>Real-time access to healthcare providers</li>
                  <li>Personalized healthcare</li>
                </ul>
                {/* <Button variant="dark" onClick={() => alert('Demo request submitted')}>
                  Request Full Demo
                </Button> */}
              </Col>
            </Row>
          </Container>
        </div>
      </ScrollAnimation>

      <footer className="footer">
        <Container>
          <Row>
            <Col md={4} className="footer-column">
              <h4>About Project</h4>
              <p>Health Management System is dedicated to helping you achieve your health and wellness goals through innovative technology and personalized care.</p>
            </Col>
            <Col md={4} className="footer-column">
              <h4>Contact</h4>
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faPhone} /> (+234) 9031472461</li>
                <li><FontAwesomeIcon icon={faEnvelope} /> clintonnkamigbo@gmail.com</li>
                <li><FontAwesomeIcon icon={faMapMarkerAlt} /> KM 5, Ajebo Road, Abeokuta, Ogun state. Chrisland University</li>
              </ul>
            </Col>
            {/* <Col md={4} className="footer-column">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" className="social-icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              </div>
            </Col> */}
          </Row>
          <Row>
            <Col className="text-center py-3">
              <p>&copy; {new Date().getFullYear()} Nkamigbo Clinton's Final Year Project, Supervised by Prof.Odun-ayo. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </Container>
  );
}

export default Home;