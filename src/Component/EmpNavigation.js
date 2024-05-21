import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';


function BasicExample() {
return (
<Navbar bg="dark" data-bs-theme="dark">
    <Container>
    <LinkContainer to='/'>
    <Navbar.Brand>Campus-Med</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        <LinkContainer to='/'>
        <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        {/* <LinkContainer to='/dashboard'>
        <Nav.Link>Dashboard</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/chat'>
        <Nav.Link>Chat</Nav.Link>
        </LinkContainer>
        <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">History</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
            Log out
            </NavDropdown.Item>
        </NavDropdown> */}
        </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>
);
}

export default BasicExample;