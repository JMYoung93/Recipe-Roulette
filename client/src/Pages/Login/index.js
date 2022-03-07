import  { React, useState } from 'react'
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import {LOG} from '../../utils/mutations'
import Auth from '../../utils/auth'

function Login(props){
    const [formState, setFormState] = useState({
        email: '', 
        password: ''
    })
    const [login, {error}] = useMutation(LOG)
    const submit = async(e) => {
        e.preventDefault()
        try{
            const mutRes = await login({
                variables: { email: formState.email, password: formState.password },
              });
              const token = mutRes.data.login.token;
              Auth.login(token);
        } catch(e){
            console.log(e)
        }
    }
    const change = (e) => {
        const { name, value } = e.target;
            setFormState({...formState, [name]: value });
    }
    return (
        <div>
            <div>
                <h1>Login</h1>
                
            </div>
            <div>
                    {(formState.email !== "") ? (
                        <div> 
                            <h2>Welcome <span> {formState.name} </span></h2>
                            
                        </div>
                    ): (
                    <form onSubmit = {submit}>
                    <input placeholder = "email@email.com" type = "email" id = "email" onChange = {change} required/>
                    <input placeholder = "password" type = "password" id = "password" onChange = {change} required />
                    {error ? (
                        <div>
                            <p className="error-text">The provided credentials are incorrect</p>
                        </div>
                    ) : null}
                    <button type = "submit" > Done </button>
                    <Link to = './createAccount'> To create an account </Link>
                    </form>
                    )}
            </div>
        </div>
    )
}
export default Login;