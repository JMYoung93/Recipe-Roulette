import { Container , Row, Col,  Image, Button} from "react-bootstrap"

export default function Header(){
    return(
        <Container fluid className='justify-content-between'>
            <Row>
                <Col >
                <Image thumbnail={true} roundedCircle={true} src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_118556937_stock-vector-refrigerator-mascot--a-vector-cartoon-illustration-of-a-home-kitchen-refrigerator-mascot.html&psig=AOvVaw2XMpgVR4-hdtKP3kf8DgUF&ust=1646549417765000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJiaztywrvYCFQAAAAAdAAAAABAD" width={100} height={100}/>
                </Col>
                <Col>
                <Button variant="primary">LogIn</Button>
                </Col>
                
            </Row>
        </Container>
    )
}