import React, {useState} from 'react'

function createAccount(){
    return(
        <div>
            <div>
                <h1 className="text-3xl font-bold">Create an Account</h1>
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