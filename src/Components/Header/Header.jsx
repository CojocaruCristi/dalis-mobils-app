import React from "react";
import {Badge, Image, Nav, Navbar} from "react-bootstrap";

import logo from "./../../Img/logo.jpg"


export const Header = () => {
    return (
        <Navbar collapseOnSelect expand={"lg"} bg={"dark"} variant={"dark"} fixed={"top"}>
            <Navbar.Brand> <Image src={logo} width={"40"} height={"40"} roundedCircle/> Dalis Bobils <Badge
                variant="secondary">SLR</Badge></Navbar.Brand>
            <Navbar.Toggle aria-controls={"responsive-navBar-nav"}/>
            <Navbar.Collapse id={"responsive-navBar-nav"}>
                <Nav className={"mr-auto"}>
                    <Nav.Link>Portfolio</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                    <Nav.Link>Information</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}