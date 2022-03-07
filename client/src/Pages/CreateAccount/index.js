import './styles.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_PROFILE } from '../../utils/mutations';
import {
  Container, 
  Form,
  Col,
  Button
} from "react-bootstrap";


function CreateAccount(){

    const [formState, setFormState] = useState({ name: '',email: '', password: '' });
    const [addProfile] = useMutation(ADD_PROFILE);

    const onSubmit = async (e) => {
    
    e.preventDefault();
    
    const mutationResponse = await addProfile({
      variables: {
        name: formState.name,
        email: formState.email,
        password: formState.password
        
      },
    });
    const token = mutationResponse.data.addProfile.token;
    Auth.login(token);
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

   
    return (
    <Container className="d-flex justify-content-center">
      <Col md='3'>
        <Form className='act-form' onSubmit={onSubmit} noValidate>
            <h2 className='text-center mb-4'>Create Account</h2>
            <div className='grey-text'>
          <Form.Group className = 'mb-3'>
            <input
                label = "Name"
                icon="user"
                placeholder = "Name"
                name = "name"
                onChange = {onChange}/>
          </Form.Group>
          <Form.Group className = 'mb-3'>
             <input
                label = "Email"
                placeholder = "Email"
                name = "email"
                onChange = {onChange}/>
          </Form.Group>
          <Form.Group className = 'mb-3'>
             <input
                label = "Password"
                placeholder = "Password"
                name = "password"
                onChange = {onChange}/>
           </Form.Group>
            </div>
            <Button className="create-btn">
                  Submit
            </Button>
        </Form>
      </Col>
    </Container>
    )
}

export default CreateAccount