import React, {useState} from 'react'
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { CREATE} from '../utils/mutations';
import Auth from '../utils/auth';


function createAccount(props){
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addProfile] = useMutation(ADD_PROFILE);

    
    const submit = async(e) => {
        e.preventDefault()
        const mutRes = await addProfile({
            variables:{
                name: formState.name
                email: formState.email
                password: formState.password
            }
        })
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    }

    const change = (e) => {
        const { name, value } = e.target;
        setFormState({...formState, [name]: value,});
    }


    return(
        <div>
            <div>
                <h1>Create an Account</h1>
            </div>
            <div>
                <form>
                    <input placeholder = "username" type = "username" id = "username" required/>
                    <input placeholder = "email@email.com" type = "email" id = "email" required/>
                    <input placeholder = "password" type = "password" id = "password" required />
                    <button type = "submit" > Done </button>
                    <Link to = './login'> If account already exists</Link>
                </form>
            </div>
        </div>
    )
}

export default createAccount