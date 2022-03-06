import React from 'react'
import {Card, Button, Carousel} from 'react-bootstrap'


function Recipe(props) {
    return(
    <Carousel>
      <Carousel.Item>
        <Card style={{ width: '30rem' }}>
        {/* <Card.Img variant="top" src={props.data.recipe.image}/> */}
        <Card.Body>
          {/* <Card.Title>{props.data.recipe.label}</Card.Title> */}
          {/* <Card.Text> */}
           {/* {props.data.recipe.ingredientLines.map(ingredient=>{
             return(
               <div>
                 <p>{ingredient}</p>
               </div>
             )
           })} */}
          {/* </Card.Text> */}
          <Button variant="primary">Favorite</Button>
        </Card.Body>
      </Card>
      </Carousel.Item>
    </Carousel>
    )
}

export default Recipe;