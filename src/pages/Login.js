import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css";
import axios from 'axios';
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";



// Add these interceptors outside of your component
axios.interceptors.request.use(request => {
    console.log('Starting Request', JSON.stringify(request, null, 2))
    return request
})

axios.interceptors.response.use(response => {
    console.log('Response:', JSON.stringify(response, null, 2))
    return response
})

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            console.log('Sending login request...');
            const response = await axios.post('http://localhost:5001/api/patients/login', { email, password });
            console.log('Full response:', response);
    
            // Log the exact data being returned
            console.log('Response data:', response.data);
    
            // Check if the response contains user data
            if (response.data && response.data.user && response.data.user.id) {
                console.log('Login successful');
                // Store user data or token as needed
                localStorage.setItem('userId', response.data.user.id);
                localStorage.setItem('userRole', response.data.user.role);
                // Navigate to dashboard
                navigate('/dashboard');
            } else {
                console.log('Login failed: Unexpected response format');
                setError('Login failed: Unexpected response format');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

// const animatedTextRef = useRef(null);

// useEffect(() => {
// const animatedText = animatedTextRef.current;
// const texts = ["Your Online healthcare partner", "Convenient and Accessible", "Trusted Medical Advice"];
// let currentIndex = 0;

// function updateText() {
//     if (animatedText) {
//     animatedText.textContent = texts[currentIndex];
//     currentIndex = (currentIndex + 1) % texts.length;
//     }
// }

// const interval = setInterval(updateText, 3000);

// return () => clearInterval(interval);
// }, []);

return (
    <Container>
        <Row>
            <Col md={12} className="d-flex flex-direction-column align-items-center justify-content-center">
                <div className="txt1">
                <h2>
                    Campus-Med: <span className="animated-text">Your Online healthcare partner</span>
                </h2>
                <div>
                    <h4>
                    Healthcare made just for you !!
                    </h4>
                    <h4>
                    Experience seamless delivery of healthcare services.
                    </h4>
                </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={2} className="login_bg">
            </Col>
            <Col md={8} className="d-flex flex-direction-column align-items-center justify-content-center">
                <Form className="form_inc" onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <Form.Text className="text-muted">
                            Login with your email address.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    </Form.Group>
                    <Button variant="dark" type="submit" disabled={isLoading}>
                        {isLoading ? 'Logging in...' : 'Log In'}
                    </Button>
                    {error && <p className="text-danger mt-3">{error}</p>} {/* Display error message */}
                    {/* <div className="py-4">
                        <p>
                            Don't have an account ? <Link to={"/signup"}>Signup</Link>
                        </p>
                    </div> */}
                </Form>
            </Col>
            <Col md={2} className="login_bg"></Col>
        </Row>
    </Container>
);
}

export default Login;
