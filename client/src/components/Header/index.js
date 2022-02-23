import { Container , Row, Col,  Image, Button} from "react-bootstrap"

export default function Header(){
    return(
        <Container fluid className='justify-content-between'>
            <Row>
                <Col >
                <Image thumbnail={true} roundedCircle={true} src="https://images.unsplash.com/photo-1530908158103-e2d2bf40c235?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FydG9vbiUyMHJlZnJpZ2VyYXRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" width={100} height={100}/>
                </Col>
                <Col>
                <Button variant="primary">LogIn</Button>
                </Col>
                
            </Row>
        </Container>
    )
}