import { Button, Container, Nav, Navbar } from "react-bootstrap"

const Header = () => {
    return (
        <Navbar expand="lg" className=" p-3">
            <Container>
                <div className="logo">
                    <h3 style={{color: "#262223"}}>Urban</h3>
                </div>
                <Nav className="d-flex flex-row">
                    <Nav.Link style={{margin: "0px 20px"}} href="#home">Home</Nav.Link>
                    <Nav.Link style={{margin: "0px 20px"}} href="#home">Services</Nav.Link>
                    <Nav.Link style={{margin: "0px 20px"}} href="#home">Property</Nav.Link>
                    <Nav.Link style={{margin: "0px 20px"}} href="#home">Contact</Nav.Link>
                </Nav>
                <Nav className="d-flex flex-row">
                    <Button className="" style={{margin: "0px 20px", color: "#262223", background: "none", border: "none"}}>Login</Button>
                    <Button style={{margin: "0px 20px", background: "#262223", border: "none"}}>Sign Up</Button>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header