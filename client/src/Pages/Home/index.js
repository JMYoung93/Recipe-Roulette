import { Container } from "react-bootstrap"
import DropDown from "../../components/Dropdown"
import Recipe from "/Users/juwonoh/project-3/Recipe-Roulette/client/src/components/Recipe"
export default function Home(){
    return(
        <Container fluid justify-content-center>
            <DropDown />
            <h1>This is the Home page</h1>
            <Recipe/>
        </Container>
    )
}