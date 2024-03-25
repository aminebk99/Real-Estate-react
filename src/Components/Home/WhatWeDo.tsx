import { Col, Container, Row } from "react-bootstrap"

const WhatWeDo = () => {
    return (
        <Container>
            <h1 className="text-center">What We Do</h1>
            <Row className="d-flex">
                <Col
                className="p-2 m-2 rounded-4 d-flex flex-column justify-content-end"
                    style={{ height:"500px", color: "white", backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?w=1380&t=st=1711383388~exp=1711383988~hmac=b23f8a9f511886c7c88331b070b1fc8eb2138e763ed54cf620d5f8f7e485056f)`,
                backgroundSize: "cover" }}
                >
                    <Row className="mb-5">
                    <h4>Property management</h4>
                    <span style={{ width: "70%"}}>We Help landlords handle rental property management</span>
                    </Row>
                </Col>
                <Col
                className="p-2 m-2 rounded-4 d-flex flex-column justify-content-end"
                    style={{ height:"500px", color: "white", backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?w=1380&t=st=1711383388~exp=1711383988~hmac=b23f8a9f511886c7c88331b070b1fc8eb2138e763ed54cf620d5f8f7e485056f)`,
                backgroundSize: "cover" }}
                >
                    <Row className="mb-5">
                    <h4>Property management</h4>
                    <span style={{ width: "70%"}}>We Help landlords handle rental property management</span>
                    </Row>
                </Col>
                <Col
                className="p-2 m-2 rounded-4 d-flex flex-column justify-content-end"
                    style={{ height:"500px", color: "white", backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?w=1380&t=st=1711383388~exp=1711383988~hmac=b23f8a9f511886c7c88331b070b1fc8eb2138e763ed54cf620d5f8f7e485056f)`,
                backgroundSize: "cover" }}
                >
                    <Row className="mb-5">
                    <h4>Property management</h4>
                    <span style={{ width: "70%"}}>We Help landlords handle rental property management</span>
                    </Row>
                </Col>


            </Row>
        </Container>
    )
}

export default WhatWeDo
