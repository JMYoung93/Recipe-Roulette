import { Container } from "react-bootstrap"
import DropDown from "../../components/Dropdown"

export default function Home(){
    return(
        <Container fluid justify-content-center>
            <DropDown />
            <h1>This is the Home page</h1>
        </Container>
    )
}