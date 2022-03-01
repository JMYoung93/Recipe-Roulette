import { Container , Row, Col, Image, Button, Nav, Navbar} from "react-bootstrap"

export default function Header(){
    return(
        <Navbar bg="light">
        <Container fluid className='justify-content-between'>
            <Navbar.Brand href="#home">
                <Image thumbnail={true} roundedCircle={true} src={require('./roulettelogo.png')} width={110} height={110}
                className='d-inline-block align top'/>
            </Navbar.Brand>
                <Nav className="me-auto ">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#Login">Favorites</Nav.Link>
                    <Nav.Link href="#Logout">Login</Nav.Link>
                    <Nav.Link href="#Favorites">Logout</Nav.Link>
                </Nav>
        </Container>
        </Navbar>
    )
}

  