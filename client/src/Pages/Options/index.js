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
        {
        ["checkbox"].map((type) => (
        <div key={`default-${type}`} className="mb-3">
        <Form.Check
                  type={type}
                  id={`peanut-free`}
                  label={`Peanut Free`}
                  value="peanut-free"
                  checked={props.formState.peanutFree}
                  onChange={props.onChange}
                /></div>))
            }
             <Button variant="primary">
                  submit
                </Button>
        </Form>
        </Container>
  );
};
        /* <h1>What do you want to eat today?</h1>
        <Form.Group>
          <h2>Protein Choice</h2>
          <InputGroup className="mb-3">
            <DropdownButton
              variant="outline-secondary"
              title="Dietary Preferences"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item href="#">Beef</Dropdown.Item>
              <Dropdown.Item href="#">Chicken</Dropdown.Item>
              <Dropdown.Item href="#">Fish</Dropdown.Item>
              <Dropdown.Item href="#">Pork</Dropdown.Item>
              <Dropdown.Item href="#">Veggies</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </Form.Group>

        <Form.Group>
          <h2>Dietary Preferences</h2>
          <InputGroup className="mb-3">
            <DropdownButton
              variant="outline-secondary"
              title="Dietary Preferences"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item href="#">Vegetarian</Dropdown.Item>
              <Dropdown.Item href="#">Vegan</Dropdown.Item>
              <Dropdown.Item href="#">Pescatarian</Dropdown.Item>
              <Dropdown.Item href="#">Not Picky</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </Form.Group>

        <Form.Group>
          <h2>Meal Course</h2>
          <InputGroup className="mb-3">
            <DropdownButton
              variant="outline-secondary"
              title="Meal Course"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item href="#">Breakfast</Dropdown.Item>
              <Dropdown.Item href="#">Lunch</Dropdown.Item>
              <Dropdown.Item href="#">Dinner</Dropdown.Item>
              <Dropdown.Item href="#">Snack</Dropdown.Item>
              <Dropdown.Item href="#">Not Picky</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </Form.Group>

        <Form.Group>
          <h2>Allergies</h2>
          <InputGroup className="mb-3">
            {["checkbox"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`Gluten-Free`}
                  value="gluten"
                  onChange={(e) => choicesArr.push(e.currentTarget.value)}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`Soy-Free`}
                  value="soy"
                  onChange={(e) => {
                    choicesArr.push(e.currentTarget.value);
                  }}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`Peanut-Free`}
                  value="nutfree"
                  onChange={(e) => choicesArr.push(e.currentTarget.value)}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`Shellfish-Free`}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`Egg-Free`}
                />

                <Form.Check
                  type={type}
                  label={`Dairy-Free`}
                  id={`disabled-default-${type}`}
                />
                <Button variant="primary" onClick={() => getApistuff()}>
                  submit
                </Button>
              </div>
            ))}
          </InputGroup>
        </Form.Group>
      </Form> */
 



export default Options;
