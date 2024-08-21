import React, { useState } from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from "react-bootstrap/Alert";
import axios from 'axios';

function Complaint() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        majorComplaints: '',
        historyOfPresentIllness: '',
        physicalExamination: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5001/api/complaints', formData);
            setSuccess('Complaint submitted successfully');
            setError('');
            setFormData({
                majorComplaints: '',
                historyOfPresentIllness: '',
                physicalExamination: '',
            });
            navigate('/dashboard');
        } catch (err) {
            setError('Failed to submit complaint');
            setSuccess('');
        }
    };

    return (
        <div className="consultation-container">
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
                        <LinkContainer to='/History-page'>
                            <Nav.Link>History page</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Row>
                    <Col md={12} className="d-flex flex-direction-column align-items-center justify-content-center">
                        <h2 className="head1">Patient Complaint Portal</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {success && <Alert variant="success">{success}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            {/* <Form.Group className="mb-3" controlId="formpatientName">
                                <Form.Label>Patient Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="patientName"
                                    value={formData.patientName}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group> */}
                            <Form.Group className="mb-3" controlId="formMajorComplaints">
                                <Form.Label>Major Complaint</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="majorComplaints"
                                    value={formData.majorComplaints}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formHistoryOfPresentIllness">
                                <Form.Label>History of Present Illness</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={6}
                                    name="historyOfPresentIllness"
                                    value={formData.historyOfPresentIllness}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPhysicalExamination">
                                <Form.Label>Physical Examination (Optional)</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={6}
                                    name="physicalExamination"
                                    value={formData.physicalExamination}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            
                            <Button variant="dark" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Complaint;
