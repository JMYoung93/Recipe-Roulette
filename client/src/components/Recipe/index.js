import React from 'react'
import {Card, Button, Carousel} from 'react-bootstrap'
function Recipe(){
    return(
    <Carousel>
      <Carousel.Item>
        <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1583019107470-5bf8e4a96314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDcyfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" />
        <Card.Body>
          <Card.Title>Recipe Title</Card.Title>
          <Card.Text>
            Recipe
          </Card.Text>
          <Button variant="primary">Favorite</Button>
        </Card.Body>
      </Card>
      </Carousel.Item>
    </Carousel>
    )
}

export default Recipe;