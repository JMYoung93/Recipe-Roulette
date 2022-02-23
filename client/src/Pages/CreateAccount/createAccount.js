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
<<<<<<< HEAD:client/src/pages/createAccount.js
                    <input placeholder = "password" type = "password" id = "password" required/>
=======
                    <input placeholder = "password" type = "password" id = "password" required />
>>>>>>> a4a0659f941e79aae2df7c98931519f7b00a4f51:client/src/Pages/CreateAccount/createAccount.js
                    <button type = "submit" > Done </button>
                    <Link to = './login'> If account already exists</Link>
                </form>
            </div>
        </div>
    )
}

export default createAccount