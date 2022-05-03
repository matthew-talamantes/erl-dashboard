import React from "react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Login = ({ onLogin }) => {
  let navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email!");
      return;
    } else if (!password) {
      alert("Please enter your password!");
    }

    onLogin({
      email: email,
      password: password,
    });

    setEmail("");
    setPassword("");

    navigate("/");
  };
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formLogin">
          <Row className="justify-content-md-center">
            <Col sm md="4">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col sm md="4" className="d-flex justify-content-end">
              <Button type="submit">Login</Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
      <Row className="justify-content-md-center">
        <Col sm md="4">
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
