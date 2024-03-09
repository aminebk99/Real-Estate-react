import { Container } from "react-bootstrap"


const Slide = () => {
    return (
        <Container style={{ position: "relative" }} className="p-0">
            <Container className="w-100 p-0">
                <img className="w-100 rounded-5" src="https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-generative-ai-illustration_1258-151616.jpg?w=1800&t=st=1710022926~exp=1710023526~hmac=50f92ec22faf1b79553563604a312002a5c191573276a21effc54ec9735261d1" alt="photo" />
            </Container>
            <Container
                style={{ height: "100%", color: "white", position: "absolute", top: "0px" }}
                className="p-5 d-flex flex-column justify-content-between">
                <Container>
                    <h3>Discover Your Perfect <br /> Property Today</h3>
                    <span>Real estate properties for sale and <br />rent in over 12+ countries</span>
                </Container>
                <Container 
                style={{background: "#ffffff", color: "black"}}
                className="rounded-5 p-5 w-100">
                    <div className="d-flex">
                    <div className="link" style={{margin: "0px 20px"}}>Buy</div>
                    <div className="link">rent</div>
                    </div>

                </Container>

            </Container>
        </Container>
    )
}

export default Slide
