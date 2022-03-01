import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Recipe() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1583019107470-5bf8e4a96314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDcyfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Recipe Name</h3>
          <p>Recipe Description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1643381367072-8a7b387f1c53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg0fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Recipe Name</h3>
          <p>Recipe Description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1643226228323-34e639efc40e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDk5fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Recipe Name</h3>
          <p>Recipe Description</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Recipe;
