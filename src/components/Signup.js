import React from "react";

import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Signup = ({ onSignup }) => {
  let navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password1, setPassword1] = React.useState("");
  const [password2, setPassword2] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please add a valid email address!");
      return;
    } else if (!username) {
      alert("Please add a Username!");
      return;
    } else if (!password1) {
      alert("Please set a password!");
      return;
    } else if (!password2) {
      alert("Please re-enter your password!");
      return;
    } else if (password1 != password2) {
      alert("Passwords did not match!");
      return;
    }

    onSignup({
      email: email,
      username: username,
      password1: password1,
      password2: password2,
    });

    setEmail("");
    setUsername("");
    setPassword1("");
    setPassword2("");

    navigate("/");
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formSignup">
          <Row className="justify-content-md-center">
            <Col sm md="4">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
              />
              <Form.Label>Re-enter Password</Form.Label>
              <Form.Control
                type="password"
                value={password2}
                onChange={(e) => {
                  setPassword2(e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col sm md="4" className="d-flex justify-content-end">
              <Button type="submit">Sign Up</Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Signup;
