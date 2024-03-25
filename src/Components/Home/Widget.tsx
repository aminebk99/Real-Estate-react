import { Col, Container, Row } from "react-bootstrap";

const Widget = () => {
    return (
        <Container className="mt-5 mb-5">
            <Row>
                <Col className="p-4 rounded-4" style={{backgroundColor: "#e8e8e8"}}>
                    <h1>10 M+</h1>
                    <span>Happy Customers</span>
                </Col>
                <Col className="p-4 rounded-4" style={{
                    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-generative-ai-illustration_1258-151616.jpg?w=1800&t=st=1710022926~exp=1710023526~hmac=50f92ec22faf1b79553563604a312002a5c191573276a21effc54ec9735261d1)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    color: "#fff", // Text color on top of the image
                    }}>
                    <h1>12 K+</h1>
                    <span>Elegant Properties</span>
                </Col>
                <Col>
                    <h1>8 k+</h1>
                    <span>Years Of Service</span>
                </Col>
            </Row>
        </Container>
    )
}

export default Widget;
