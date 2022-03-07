import "./styles.css";
import axios from "axios";
import { render } from "@testing-library/react";
import React, { useState } from "react";
import {
  InputGroup,
  DropdownButton,
  Dropdown,
  FormControl,
  Form,
  FormGroup,
  Button,
  Image,
  Row,
  Col,
  Container,
  Carousel,
} from "react-bootstrap";
import Recipe from "../../components/Recipe";

function Options(props) {
  // const rootURL = "https://api.edamam.com/search?";
  // const apiKey = "&app_key=c0baa345e633fba28dd95821b2cec992";
  // const appId = "&app_id=9ace14ad";
  // const param1 = "q=";
  // const param2 = "&Health=peanut-free";
  // const param3 = "&mealType=Lunch";
  // const testAPI = rootURL + param1 + appId + apiKey + param2 + param3;

  const [choice, setChoice] = useState([]);
  // const [proteinSelection, setProteinSelection] = useState("");
  const [dietSelection, setDietSelection] = useState("");
  const [mealSelection, setMealSelection] = useState("");
  const [allergySelection, setAllergySelection] = useState("");
  let choicesArr = [];

  // const handleProteinSelect = (e) => {
  //   setProteinSelection(e)
  //   console.log(e)
  // }

  const handleDietSelect = (e) => {
    setDietSelection(e);
    console.log(e);
  };

  const handleMealSelect = (e) => {
    setMealSelection(e);
    console.log(e);
  };

  const handleAllergySelect = (e) => {
    setAllergySelection(e);
    console.log(e);
  };

  // async function getApistuff() {
  //   await axios(testAPI)
  //   .then((response) => {
  //     if (response.status === 200) {
  //       console.log(response);
  //       console.log(response.data);
  //       console.log(response.data.hits);
  //       console.log(response.data.hits[1]);
  //       const recipes = response.data.hits;
  //       console.log(recipes)
  //       console.log(`---------------------------------------`);
  //       for( let i = 0; i < recipes.length; i++) {
  //         console.log(response.data.hits[i]);
  //       }

  //       return response.json();
  //     }

  //     console.log(response);
  //     console.log(response.status);
  //     throw response;
  //   } ,
  //   //  .then(data => {
  //   //   setData(data)

  //   //   })
  //   //   .catch(err => {
  //   //   console.error(err)
  //   //   setError(err)
  //     // })
  //   );
  // }

  const click = () => {
    setChoice(choicesArr);
  };

  return (
    <Container className="d-flex justify-content-center">
      <Form onSubmit={props.submitButton} className="mainForm">
        <Image
          src={require("../../components/Header/roulettelogo.png")}
          width={230}
          height={230}
          className="d-inline-block align top"
        />

        <Form.Group className="mb-3">
          <Form.Label htmlFor='protein'>Protein</Form.Label>
          <Form.Select name='protein' id='protein'>
                <option value='chicken'>CHICKEN</option>
                <option value='fish'>FISH</option>
                <option value='beef'>BEEF</option>
                <option value='pork'>PORK</option>
                <option value='veggies'>VEGGIES</option>
                <option value='chicken'>NOT PICKY</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor='course'>Meal Type</Form.Label>
          <Form.Select name='course' id='course'>
                <option value='breakfast'>Breakfast</option>
                <option value='lunch'>Lunch</option>
                <option value='dinner'>Dinner</option>
                <option value='snack'>Snack</option>
                <option value='lunch'>NOT PICKY</option>
          </Form.Select>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label htmlFor='diet'>Dietary Preferences</Form.Label>
          <Form.Select name='diet' id='diet'>
                <option value='soy free'>Soy-Free</option>
                <option value='dairy free'>Dairy-Free</option>
                <option value='gluten free'>Gluten-Free</option>
                <option value='egg free'>Egg-Free</option>
                <option value='peanut free'>Peanut-Free</option>
          </Form.Select>
        </Form.Group>

        https://stackoverflow.com/questions/49078351/checkbox-not-working-in-react

             <Button variant="primary">
                  submit
                </Button>
        </Form>
        </Container>
  );
};
        
export default Options;
