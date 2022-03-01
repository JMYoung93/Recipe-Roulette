import React from 'react'
import {Card, Button} from 'react-bootstrap'
function Recipe(){
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Recipe Title</Card.Title>
          <Card.Text>
            Recipe
          </Card.Text>
          <Button variant="primary">Favorite</Button>
        </Card.Body>
      </Card>
    )
}
export default Recipe;