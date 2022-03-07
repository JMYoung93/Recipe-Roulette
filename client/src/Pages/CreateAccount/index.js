import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_PROFILE } from '../../utils/mutations';


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
        <form onSubmit={onSubmit} noValidate>
            <h2>Create Account</h2>
            <input
                label = "Name"
                placeholder = "Name"
                name = "name"
                onChange = {onChange}/>
             <input
                label = "Email"
                placeholder = "Email"
                name = "email"
                onChange = {onChange}/>
             <input
                label = "Password"
                placeholder = "Password"
                name = "password"
                onChange = {onChange}/>
            <button type = "submit" primary>Submit</button>
        </form>
    )
}

export default CreateAccount