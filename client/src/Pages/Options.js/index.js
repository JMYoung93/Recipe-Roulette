const rootURL = "https://api.edamam.com/search?"
const apiKey = "&app_key=c0baa345e633fba28dd95821b2cec992"
const appId = "&app_id=9ace14ad"
const param1 = "q=fish"
const param2 = "&Health=peanut-free"
const param3 = "&mealType=Lunch"



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
} from "react-bootstrap";
function Options() {
  const [choice, setChoice] = useState([]);
  let choicesArr = [];

  const click = () => {
    setChoice(choicesArr);
  };
  console.log(choicesArr);

  return (
    <Form>
      <h1>What do you want to eat today?</h1>

      <Form.Group className="mb-3">
        <h2>Protein Selection</h2>
        <InputGroup className="mb-3">
          <DropdownButton
            variant="outline-secondary"
            title="Protein Selection"
            id="input-group-dropdown-1"
            onClick={(e) => {
              choicesArr.push(e.currentTarget.value);}}
          >
            <Dropdown.Item href="#" value="chicken">Chicken</Dropdown.Item>
            <Dropdown.Item href="#" value="beef">Beef</Dropdown.Item>
            <Dropdown.Item href="#" value="fish">Fish</Dropdown.Item>
            <Dropdown.Item href="#" value="veggies">Veggies</Dropdown.Item>
          </DropdownButton>
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3">
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
          <Form>
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
                  submit
                </Button>
              </div>
            ))}
          </Form>
        </InputGroup>
      </Form.Group>
    </Form>
  );
}

export default Options;
