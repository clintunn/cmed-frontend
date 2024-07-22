import React from "react";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faDiagnoses, faMedkit, faCalendarCheck, faEnvelope, faPhone, faMapMarkerAlt, faUserMd, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
// import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import ScrollAnimation from "../Assets/ScrollAnimation";
import "./Home.css";


function Home() {
  return (
    <Container fluid className="p-0">
      <div className="home-hero">
        <Row className="justify-content-center align-items-center h-100 m-0">
          <Col md={8} className="text-center">
            <h1 className="mb-4">Welcome to Health Management System</h1>
            <p className="lead mb-5">Take control of your health with our platform and AI technology.</p>
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
              <h3 className="feature-title">Medication Tracking</h3>
              <p>Have full control of medication</p>
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
              <p className="cta-text">Join our users who have already improved their health with our system. Our team of expert healthcare professionals is ready to guide you on your journey to better health.</p>
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