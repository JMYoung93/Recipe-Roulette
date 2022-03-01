// This is the dropdown function for our Page //
import { InputGroup, DropdownButton, Dropdown, FormControl } from "react-bootstrap"

export default function DropDown(){
    return(

  <InputGroup className="mb-3">
    <DropdownButton
      variant="outline-secondary"
      title="Dropdown"
      id="input-group-dropdown-1"
    >
     <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
    <FormControl aria-label="Text input with dropdown button" />
  </InputGroup>

    )
}