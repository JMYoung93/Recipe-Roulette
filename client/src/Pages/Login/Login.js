import React, {useState} from 'react'

function login(){
    return (
        <div>
            <div>
                <h1>Login</h1>
                
            </div>
            <div>
                <form>
                    <input placeholder = "email@email.com" type = "email" id = "email" required/>
                    <input placeholder = "password" type = "password" id = "password" required />
                    {error ? (
                        <div>
                            <p className="error-text">The provided credentials are incorrect</p>
                        </div>
                    ) : null}
                    <button type = "submit" > Done </button>
                    <Link to = './createAccount'> To create an account </Link>
                </form>
            </div>
        </div>
    )
}

export default Login