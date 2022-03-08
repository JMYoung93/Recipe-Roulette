import React from "react";
import { Card, Button, Carousel } from "react-bootstrap";
import "./styles.css";

function Recipe(props) {
  const recps = props.responseData;
  console.log(recps)
  return (
     <Carousel>
      {recps.map((meal)=>{
        return(
          <Carousel.Item>
            <Card className="recipe">
                <Card.Img
                  className="recipe-img"
                  variant="top"
                 src={meal.recipe.image}
               alt="Responsive image"
                />
                <Card.Body>
                  <Card.Title class="rec-title">{meal.recipe.label}</Card.Title>
                  <Card.Text>
                    <p>12 Ingredients | 50 Minutes | 425 Calories</p>
                    <a href={meal.recipe.url}>
                      Full Recipe
                    </a>
                  </Card.Text>
                  <Button variant="primary" className="fav-btn">
                    Favorite
                  </Button>
                </Card.Body>
              </Card>
            </Carousel.Item>
        )
      })}
    </Carousel>
    // <Carousel>
    //   <Carousel.Item>
    //     <Card className="recipe">
    //       <Card.Img
    //         className="recipe-img"
    //         variant="top"
    //         src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/8/4/0/gl0605_chicken1.jpg.rend.hgtvcom.966.725.suffix/1371584164145.jpeg"
    //         alt="Responsive image"
    //       />
    //       <Card.Body>
    //         <Card.Title class="rec-title">Chicken Chasseur (Hunter-style Chicken)</Card.Title>
    //         <Card.Text>
    //           <p>12 Ingredients | 50 Minutes | 425 Calories</p>
    //           <a href="https://www.yummly.com/recipe/Simple-Chicken-Dinner-1199375#078ab70f-3335-4082-83cf-0523970da28e">
    //             Full Recipe
    //           </a>
    //         </Card.Text>
    //         <Button variant="primary" className="fav-btn">
    //           Favorite
    //         </Button>
    //       </Card.Body>
    //     </Card>
    //   </Carousel.Item>

    //   <Carousel.Item>
    //     <Card className="recipe">
    //       <Card.Img
    //         className="recipe-img"
    //         variant="top"
    //         src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/7/22/3/FNM_090114-Chicken-Chickpea-Curry-Recipe_s4x3.jpg.rend.hgtvcom.966.725.suffix/1406234236468.jpeg"
    //         alt="Responsive image"
    //       />
    //       <Card.Body>
    //         <Card.Title class="rec-title">Chicken-Chickpea Curry</Card.Title>
    //         <Card.Text>
    //           <p>12 Ingredients | 40 Minutes | 376 Calories</p>
    //           <a href="https://www.foodnetwork.com/recipes/food-network-kitchen/chicken-chickpea-curry-3363127#/">
    //             Full Recipe
    //           </a>
    //         </Card.Text>
    //         <Button variant="primary" className="fav-btn">
    //           Favorite
    //         </Button>
    //       </Card.Body>
    //     </Card>
    //   </Carousel.Item>

    //   <Carousel.Item>
    //     <Card className="recipe">
    //       <Card.Img
    //         className="recipe-img"
    //         variant="top"
    //         src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/1/25/0/FN_Deviled-Chicken-Thighs_s4x3.jpg.rend.hgtvcom.966.725.suffix/1371613884492.jpeg"
    //         alt="Responsive image"
    //       />
    //       <Card.Body>
    //         <Card.Title class="rec-title">Deviled Chicken Thighs</Card.Title>
    //         <Card.Text>
    //           <p>11 Ingredients | 55 Minutes | 450 Calories</p>
    //           <a href="https://www.yummly.com/recipe/Simple-Chicken-Dinner-1199375#078ab70f-3335-4082-83cf-0523970da28e">
    //             Full Recipe
    //           </a>
    //         </Card.Text>
    //         <Button variant="primary" className="fav-btn">
    //           Favorite
    //         </Button>
    //       </Card.Body>
    //     </Card>
    //   </Carousel.Item>

    //   <Carousel.Item>
    //     <Card className="recipe">
    //       <Card.Img
    //         className="recipe-img"
    //         variant="top"
    //         src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/11/23/0/FN_roman-chicken-011_s4x3.jpg.rend.hgtvcom.966.725.suffix/1382541005962.jpeg"
    //         alt="Responsive image"
    //       />
    //       <Card.Body>
    //         <Card.Title class="rec-title">Roman-Style Chicken</Card.Title>
    //         <Card.Text>
    //           <p>16 Ingredients | 1 Hour | 266 Calories</p>
    //           <a href="https://www.foodnetwork.com/recipes/giada-de-laurentiis/roman-style-chicken-recipe-1945439">
    //             Full Recipe
    //           </a>
    //         </Card.Text>
    //         <Button variant="primary" className="fav-btn">
    //           Favorite
    //         </Button>
    //       </Card.Body>
    //     </Card>
    //   </Carousel.Item>
    // </Carousel>
  );
}

export default Recipe;
