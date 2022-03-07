import { Container } from "react-bootstrap"
import Options from "../Options"
import Recipe from "../../components/Recipe"
export default function Home(){
    return(
        <Container className = 'd-flex justify-content-center'>
            
            <Recipe/>
        </Container>
    )
}