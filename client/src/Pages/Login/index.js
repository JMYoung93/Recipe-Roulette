import './styles.css'
import { React, useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOG } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { Card, Button, Carousel, Container, Col, Form } from "react-bootstrap";

function Login(props) {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [login, { error }] = useMutation(LOG);
  const submit = async (e) => {
    e.preventDefault();
    try {
      const mutRes = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutRes.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };
  const change = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  return (
    <Container className="d-flex justify-content-center">
      <Col md='3'>
         <Form className='log-form mb-4' onSubmit={submit}>
            <h1 className = 'text-center'>Login</h1>
          <div className='grey-text'>
            <Form.Group className = 'mb-3'>
                <input
                  placeholder="email@email.com"
                  type="email"
                  id="email"
                  onChange={change}
                  required
                />
            </Form.Group>
            <Form.Group className = 'mb-3'>
                <input
                  placeholder="password"
                  type="password"
                  id="password"
                  onChange={change}
                  required
                />
                {error ? (
                  <div>
                    <p className="error-text">
                      The provided credentials are incorrect
                    </p>
                  </div>
                ) : null}
            </Form.Group>
                </div>
                <Button className="log-btn"> Done </Button><br>
                </br>
                <Link className='link' to="./createAccount"> Create an Account </Link>
            </Form>
      </Col>
    </Container>
  );
}
export default Login;
