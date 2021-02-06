import React from "react";
import {Badge, Image, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-scroll"
import logo from "./../../Img/logo.jpg"
import styledClasses from "./header.module.css"


export const Header = () => {
    return (
        <Navbar  collapseOnSelect expand={"lg"} bg={"dark"} variant={"dark"} fixed={"top"} className={styledClasses.header}>
            <Navbar.Brand style={{"cursor": "pointer"}} ><Link to={"top"} smooth={true} duration={1000}><Image src={logo} width={"40"} height={"40"} roundedCircle/> Dalis Mobila </Link><Badge
                variant="secondary">SLR</Badge></Navbar.Brand>
            <Navbar.Toggle aria-controls={"responsive-navBar-nav"}/>
            <Navbar.Collapse id={"responsive-navBar-nav"}>
                <Nav className={"mr-auto"}>
                    <Nav.Link><Link to={"gallery"} smooth={true} duration={1000}>Portfolio</Link></Nav.Link>
                    <Nav.Link><Link to={"contact"} smooth={true} duration={1000}>Contact Us</Link></Nav.Link>
                    <Nav.Link><Link to={"information"} smooth={true} duration={1000}>Information</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}