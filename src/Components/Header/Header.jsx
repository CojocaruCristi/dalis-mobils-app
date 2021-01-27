import React from "react";
import {Badge, Image, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-scroll"
import logo from "./../../Img/logo.jpg"


export const Header = () => {
    return (
        <Navbar collapseOnSelect expand={"lg"} bg={"dark"} variant={"dark"} fixed={"top"}>
            <Navbar.Brand><Link to={"top"} smooth={true} duration={1000}><Image src={logo} width={"40"} height={"40"} roundedCircle/> Dalis Bobils </Link><Badge
                variant="secondary">SLR</Badge></Navbar.Brand>
            <Navbar.Toggle aria-controls={"responsive-navBar-nav"}/>
            <Navbar.Collapse id={"responsive-navBar-nav"}>
                <Nav className={"mr-auto"}>
                    <Nav.Link><Link to={"gallery"} smooth={true} duration={1000}>Portfolio</Link></Nav.Link>
                    <Nav.Link><Link to={"contact"} smooth={true} duration={1000}>Contact Us</Link></Nav.Link>
                    <Nav.Link>Information</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}