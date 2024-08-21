import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Spinner, Alert, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";

axios.defaults.withCredentials = true;

function HistoryPage() {
const [historyData, setHistoryData] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
const fetchHistoryData = async () => {
    try {
    const response = await axios.get('http://localhost:5001/api/consultations/patientHistory');
    setHistoryData(response.data);
    setIsLoading(false);
    } catch (err) {
    console.error("Error fetching history data:", err);
    setError("Failed to load history data. Please try again later.");
    setIsLoading(false);
    }
};

fetchHistoryData();
}, []);

if (isLoading) {
return (
    <Container className="text-center mt-5">
    <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>
    </Container>
);
}

if (error) {
return (
    <Container className="mt-5">
    <Alert variant="danger">{error}</Alert>
    </Container>
);
}

return (
<div className="historyPage-container">
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
        <LinkContainer to='/create-patient'>
        <Nav.Link>Create Patient</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/AIchat'>
        <Nav.Link>AI Chat</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/History-page'>
        <Nav.Link>History</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/complaint-log'>
            <Nav.Link>Complaint Log</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/patient-search'>
        <Nav.Link>Patient search</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/consultation-new'>
        <Nav.Link>Consultation - new</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/consultation-follow-up'>
        <Nav.Link>Consultation - follow up</Nav.Link>
        </LinkContainer>
    </Nav>
    </Navbar.Collapse>
</Navbar>
<Container fluid>
    <Row>
    <Col>
        <h2>Consultation History</h2>
    </Col>
    </Row>
    <Row>
    <Col>
        <Table striped bordered hover responsive>
        <thead>
            <tr>
            <th>Date</th>
            <th>Provider</th>
            <th>Diagnosis</th>
            <th>Treatment</th>
            </tr>
        </thead>
        <tbody>
            {historyData.map((item, index) => (
            <tr key={index}>
                <td>{new Date(item.date).toLocaleDateString()}</td>
                <td>{item.providerName}</td>
                <td>{item.diagnosis}</td>
                <td>{item.treatment}</td>
            </tr>
            ))}
        </tbody>
        </Table>
    </Col>
    </Row>
</Container>
</div>
);
}

export default HistoryPage;