import "./styles.css";
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
} from "react-bootstrap";

const rootURL = "https://api.edamam.com/search?";
const apiKey = "&app_key=c0baa345e633fba28dd95821b2cec992";
const appId = "&app_id=9ace14ad";
const param1 = "q=fish";
const param2 = "&Health=peanut-free";
const param3 = "&mealType=Lunch";

function Options() {
  const apiUrl = 'https://api.edamam.com/search?&app_key=c0baa345e633fba28dd95821b2cec992&app_id=9ace14ad'
  const [choice, setChoice] = useState([]);
  const [proteinSelection, setProteinSelection] = useState("");
  let choicesArr = [];
  
  const handleProteinSelect = (e) => {
    setProteinSelection(e)
    console.log(e)
  }

  const click = () => {
    setChoice(choicesArr);
  };

  return (
    <Container className="d-flex justify-content-center">
      <Form className="mainForm">
        <Image
          src={require("../../components/Header/roulettelogo.png")}
          width={230}
          height={230}
          className="d-inline-block align top"
        />
        <h1>Recipe Roulette</h1>
        <h2>What do you want to eat today?</h2>
        <Form.Group className="mb-3">
          <h2 className="section-title">Protein Selection</h2>
          <InputGroup className="mb-3">
            <DropdownButton
              variant="outline-secondary"
              title="Protein Selection"
              id="input-group-dropdown-1"
      
              onSelect={handleProteinSelect}
            >
              <Dropdown.Item eventKey="Chicken">
                Chicken
              </Dropdown.Item>
              <Dropdown.Item eventKey="Beef">
                Beef
              </Dropdown.Item>
              <Dropdown.Item value="fish">
                Fish
              </Dropdown.Item>
              <Dropdown.Item value="veggies">
                Veggies
              </Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3">
          <h2 className="section-title">Dietary Preferences</h2>
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
          <h2 className="section-title">Meal Course</h2>
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
          <h2 className="section-title">Allergies</h2>
          <InputGroup className="mb-3">
              {["checkbox"].map((type) => (
                <div className="mb-3">
                  //{" "}
                  <Form.Check
                  // type="checkbox"
                  // id="selected"
                  // checked={this.state.selected}
                  // onChange={this.flipValue.bind(this)}
                  />
                  <label for="gluten-free"></label>
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
                  <Button variant="primary" onClick={() => click()}>
                    Submit
                  </Button>
                </div>
              ))}
          </InputGroup>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Options;
