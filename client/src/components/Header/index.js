import { Container , Row, Col,  Image, Button, Nav, Navbar} from "react-bootstrap"
import "./styles.css";

export default function Header(){
    return(
        <Navbar className='navbar'>
        <Container fluid className='justify-content-between'>
            <Navbar.Brand>
                <Image src={require('../Header/roulettelogo.png')} width={120} height={120}
                className='d-inline-block align top'/>
            </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link className="navlink" href="/">Home</Nav.Link>
                    <Nav.Link className="navlink" href="/favorite">Favorites</Nav.Link>
                    <Nav.Link className="navlink" href="/login">Login</Nav.Link>
                    <Nav.Link className="navlink" href="/createAccount">Create Account</Nav.Link>
                    <Nav.Link className="navlink" href="/search">Options</Nav.Link>
                </Nav>
        </Container>
        </Navbar>
    )
}