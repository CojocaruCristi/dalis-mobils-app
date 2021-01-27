import React from "react";
import {Button, Form, Image} from "react-bootstrap";
import styledClasses from "./ContactSection.module.css"
import {Parallax} from "react-parallax";



export const ContactSection = () => {
    return(
        <div id={"contact"}>
            <div className={styledClasses.contactSectionHeader}>
                <h1 className={styledClasses.contactSectionHeaderH1}>Contact us</h1>
            </div>
            <Parallax blur={3}
                      bgImage={"https://images.unsplash.com/photo-1589190141825-2862c12ad2c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}
                      strength={300}
            >
                <div style={{height: "110vh"}}>

                </div>
            </Parallax>
        </div>
    )
}