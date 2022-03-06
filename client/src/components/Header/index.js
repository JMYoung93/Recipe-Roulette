import { Container , Row, Col,  Image, Button, Nav, Navbar} from "react-bootstrap"
import "./styles.css"

export default function Header(){
    return(
        <Navbar className='navbar'>
        <Container fluid className='justify-content-between'>
            <Navbar.Brand>
                <Image src={require('../Header/roulettelogo.png')} width={120} height={120}
                className='d-inline-block align top'/>
            </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link className="navlink" href="#home">Home</Nav.Link>
                    <Nav.Link className="navlink" href="../">Favorites</Nav.Link>
                    <Nav.Link className="navlink" href="#Logout">Login</Nav.Link>
                    <Nav.Link className="navlink" href="#Favorites">Logout</Nav.Link>
                </Nav>
        </Container>
        </Navbar>
    )
}