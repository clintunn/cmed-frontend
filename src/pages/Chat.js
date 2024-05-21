import React from "react";
import{ Container, Row, Col} from "react-bootstrap";
import Sidebar from "../Component/Sidebar";
import MessageForm from "../Component/MessageForm";


function Chat() {
  return <Container>
    <Row>
      <Col md={3}>
          <Sidebar />
      </Col>
      <Col md={9}>
          <MessageForm />
      </Col>
    </Row>
  </Container>
}

export default Chat;
