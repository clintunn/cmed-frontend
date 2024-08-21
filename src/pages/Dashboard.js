import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button, Form, Alert, Spinner, Nav, Navbar } from "react-bootstrap";
import { FaUser, FaStethoscope, FaBell, FaCalendarPlus, FaBars } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import "./Dashboard.css";

axios.defaults.withCredentials = true;

function useDashboardData() {
  const [data, setData] = useState({
    profile: {},
    lastConsultation: {},
    notifications: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const [profileRes, consultationRes, notificationsRes, appointmentRemindersRes] = await Promise.all([
        axios.get('http://localhost:5001/api/patients/profile'),
        axios.get('http://localhost:5001/api/patients/last-consultation'),
        axios.get('http://localhost:5001/api/patients/notifications'),
        // axios.get('http://192.168.99.196:5001/api/notifications/appointment-reminders')
      ]);

      setData({
        profile: profileRes.data,
        lastConsultation: consultationRes.data,
        notifications: notificationsRes.data,
        // appointmentReminders: appointmentRemindersRes.data
      });
      setError(null);
    } catch (error) {
      setError('Failed to fetch data. Please try again later.');
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { data, isLoading, error, refreshData: fetchData };
}

function Dashboard() {
  const { data, isLoading, error, refreshData } = useDashboardData();
  const [appointmentForm, setAppointmentForm] = useState({ date: "", time: "", reason: "" });
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    refreshData();
  }, [refreshData]);

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/patients/request-appointment', appointmentForm);
      setAppointmentForm({ date: "", time: "", reason: "" });
      alert("Appointment request submitted successfully!");
      refreshData();
    } catch (error) {
      console.error("Error submitting appointment request:", error);
    }
  };

  const handleInputChange = (e) => {
    setAppointmentForm({ ...appointmentForm, [e.target.name]: e.target.value });
  };

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  if (isLoading) return (
    <div className="loading-spinner">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );

  return (
    <div className="dashboard-container">
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
        <Navbar.Brand href="#home">CampusMed</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/dashboard'>
              <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/complaint'>
              <Nav.Link>Patient-Complaint</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/PatHistory-page'>
              <Nav.Link>History page</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to='/create-patient'>
              <Nav.Link>Create Patient</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/AIchat'>
              <Nav.Link>AI Chat</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/History-page'>
              <Nav.Link>History</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/patient-search'>
              <Nav.Link>Patient search</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/consultation-new'>
              <Nav.Link>Consultation - new</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/consultation-follow-up'>
              <Nav.Link>Consultation - follow up</Nav.Link>
            </LinkContainer> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid>
        {error && <Alert variant="danger">{error}</Alert>}
        <Button variant="dark" onClick={refreshData} className="mb-3">Refresh Data</Button>
        <Row>
          <Col lg={3} className="sidebar-col">
            <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
              <Button variant="link" className="sidebar-toggle d-lg-none" onClick={toggleSidebar}>
                <FaBars />
              </Button>
              <nav className="sidebar-nav">
                <ul>
                  <li><a href="#profile" onClick={toggleSidebar}><FaUser /> Profile</a></li>
                  <li><a href="#last-consultation" onClick={toggleSidebar}><FaStethoscope /> Last Consultation</a></li>
                  <li><a href="#notifications" onClick={toggleSidebar}><FaBell /> Notifications</a></li>
                  <li><a href="#request-appointment" onClick={toggleSidebar}><FaCalendarPlus /> Request Appointment</a></li>
                </ul>
              </nav>
            </div>
          </Col>
          <Col lg={9} className="main-content">
            <h2 className="welcome-title">Welcome to CampusMed, {data.profile.name}</h2>
            <Row>
              <Col md={12} lg={4}>
                <Card className="dashboard-card profile-card">
                  <Card.Body>
                    <Card.Title><FaUser /> User Profile</Card.Title>
                    <Card.Text className="profile-info">
                      <p><strong>Name:</strong> {data.profile.name}</p>
                      <p><strong>Clinic ID:</strong> {data.profile.clinicId}</p>
                      <p><strong>Age:</strong> {data.profile.age}</p>
                      <p><strong>Gender:</strong> {data.profile.gender}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={12} lg={8}>
                <Card id="last-consultation" className="dashboard-card consultation-card">
                  <Card.Body>
                    <Card.Title><FaStethoscope /> Last Consultation Details</Card.Title>
                    <Card.Text className="consultation-details">
                      <p><strong>Date:</strong> {new Date(data.lastConsultation.date).toLocaleDateString()}</p>
                      <p><strong>Diagnosis:</strong> {data.lastConsultation.diagnosis}</p>
                      <p><strong>Treatment:</strong> {data.lastConsultation.treatment}</p>
                      <p><strong>Medications:</strong> {
                      data.lastConsultation.medicationPrescriptions && data.lastConsultation.medicationPrescriptions.length > 0
                        ? data.lastConsultation.medicationPrescriptions.map(prescription => prescription.medication).join(', ')
                        : 'No medications prescribed'
                    }</p>
                      <p><strong>Instructions:</strong> {data.lastConsultation.instructions}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={6}>
                <Card id="notifications" className="dashboard-card notifications-card">
                  <Card.Body>
                    <Card.Title><FaBell /> Notifications</Card.Title>
                    {data.notifications.map(notification => (
                      <Alert key={notification._id} variant="info" className="notification-alert">
                        {notification.message}
                      </Alert>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
              <Col md={12} lg={6}>
                <Card id="request-appointment" className="dashboard-card appointments-card">
                  <Card.Body>
                    <Card.Title><FaCalendarPlus /> Request Appointment</Card.Title>
                    <Form onSubmit={handleAppointmentSubmit} className="appointment-form">
                      <Form.Group>
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="date"
                          value={appointmentForm.date}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Time</Form.Label>
                        <Form.Control
                          type="time"
                          name="time"
                          value={appointmentForm.time}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Reason</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="reason"
                          value={appointmentForm.reason}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                      <Button type="submit" variant="dark" className="mt-3">Submit Request</Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;