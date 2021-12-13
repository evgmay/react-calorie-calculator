import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import Home from "./Home"
import About from "./About"
import MifflinStJeor from "./Mifflin-St. Jeor"
import HarrisBenedict from "./Harris-Benedict"
import Application from "./Application"

export default function NavBar() {
    return (
        <Router>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
                <Container>
                    <Navbar.Brand href="/">Calorie Calculator</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto pe-md-5">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <NavDropdown title="Information" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="/info-msj">Mifflin-St Jeor</NavDropdown.Item>
                                <NavDropdown.Item href="/info-hb">Harris-Benedict</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/application">Application</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/info-msj" element={<MifflinStJeor />} />
                <Route path="/info-hb" element={<HarrisBenedict />} />
                <Route path="/application" element={<Application />} />
            </Routes>
        </Router>
    );
}