import React from "react";
import styledClasses from "./footer.module.css";
import {Col, Container, Row} from "react-bootstrap";

export const Footer = () => {
    return (
            <Container fluid className={styledClasses.footerSection}>
                <Row>
                    <Col>
                      <a href={"tel:+373 692 56 001"}>+373 692 56 001</a><br/>
                      <a href={"mailto:dalismobila@gmail.com"}>dalismobila@gmail.com</a>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>
    )
}