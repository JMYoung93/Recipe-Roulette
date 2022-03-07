import { Container } from "react-bootstrap"
import React, {useState} from 'react'

function Favorite(){
    return(
        <Container fluid justify-content-center>
        <div className="Card">
            <div>
                <h1>User Info</h1>
            </div>
            <div>
                <h1>Card Carosel of stored favorites</h1>
            </div>
            <div>
                <button primary> Logout</button>
            </div>
        </div>
        </Container>
    )
}
export default Favorite;