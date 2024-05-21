import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Container, Row, Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css";
import { Link } from "react-router-dom";


function Login() {
const [email, setEmail] = useState('');         
const [password, setPassword] = useState('');

function handleLogin(e) {
    e.preventDefault();
}

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
                Experience seamless delivery of healthcare services in your school community.
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
                        Login with your school email address.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </Form.Group>
                <Button variant="dark">
                    Login
                </Button>
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
