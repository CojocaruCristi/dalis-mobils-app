import React from "react";
import styledClasses from "./footer.module.css";
import {Button, Col, Container, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import {AiOutlineMail, BsPhone, FiFacebook} from "react-icons/all";


const workDay = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        9:00 - 18:00
    </Tooltip>
);
const sunday = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        9:00 - 15:00
    </Tooltip>
);
const saturday = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Zi libera
    </Tooltip>
);


export const Footer = () => {
    return (
        <Container fluid className={styledClasses.footerSection}>
            <Row>
                <Col sm={"12"} md={"6"} className={styledClasses.footerBlocks}>
                    <div>
                        <h5>Contacte</h5>
                        <div className={styledClasses.infoBlock}>
                            <BsPhone/><span>Tel:</span><a href={"tel:+373 692 56 001"}>+373 692 56 001</a>
                        </div>
                        <div className={styledClasses.infoBlock}>
                            <AiOutlineMail/><span>EMail:</span><a
                            href={"mailto:dalismobila@gmail.com"}>сarucerulena@gmail.com</a>
                        </div>
                        <div className={styledClasses.infoBlock}>
                            <Button variant="secondary"><a href="https://www.facebook.com/dalisfurniture" target={"_blank"} style={{"text-decoration": "none"}} ><FiFacebook/></a></Button>

                        </div>
                    </div>
                </Col>
                <Col sm={"12"} md={"6"} className={styledClasses.footerBlocksDays}>

                    <h5>Orarul de lucru</h5>

                    <OverlayTrigger
                        placement="top"
                        delay={{show: 250, hide: 400}}
                        overlay={workDay}

                    >
                        <Button className={styledClasses.wDays} variant="success">L</Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        delay={{show: 250, hide: 400}}
                        overlay={workDay}

                    >
                        <Button className={styledClasses.wDays} variant="success">M</Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        delay={{show: 250, hide: 400}}
                        overlay={workDay}

                    >
                        <Button className={styledClasses.wDays} variant="success">MR</Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        delay={{show: 250, hide: 400}}
                        overlay={workDay}

                    >
                        <Button className={styledClasses.wDays} variant="success">J</Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        delay={{show: 250, hide: 400}}
                        overlay={workDay}

                    >
                        <Button className={styledClasses.wDays} variant="success">V</Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        delay={{show: 250, hide: 400}}
                        overlay={sunday}

                    >
                        <Button className={styledClasses.wDays} variant="warning">S</Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        delay={{show: 250, hide: 400}}
                        overlay={saturday}

                    >
                        <Button className={styledClasses.wDays} variant="danger">D</Button>
                    </OverlayTrigger>

                </Col>
            </Row>
        </Container>
    )
}