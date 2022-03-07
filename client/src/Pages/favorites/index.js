import { Container } from "react-bootstrap"
import React, {useState} from 'react'
import "./styles.css";

function Favorites(){
    return(
        <Container className='fluid justify-content-center'>
            <div>
                <h1>user info</h1>
            </div>
            <div>
                <h1>Card Carosel of stored favorites</h1>
            </div>
            <div>
                <h1>where the logout will be</h1>
            </div>
        </Container>
    )
}

export default Favorite;