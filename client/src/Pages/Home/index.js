import { Container } from "react-bootstrap"
import DropDown from "../../components/Dropdown"
import {Card} from "../components/Card"
export default function Home(){
    return(
        <Container fluid justify-content-center>
            <DropDown />
            <h1>This is the Home page</h1>
            <Card
                title={id}
                itemId={id} 
                key={id}
                onClick={handleItemClick(id)}
                selected={id === selected}
              />
        </Container>
    )
}