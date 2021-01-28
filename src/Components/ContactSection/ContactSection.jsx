import React from "react";

import styledClasses from "./ContactSection.module.css"
import {Parallax} from "react-parallax";
import contactSectionBG from "./../../Img/contactSectionBG.jpeg"


export const ContactSection = () => {

    return (
        <div id={"contact"}>
            <div className={styledClasses.contactSectionHeader}>
                <h1 className={styledClasses.contactSectionHeaderH1}>Contact us</h1>
            </div>
            <Parallax blur={3}
                      bgImage={contactSectionBG}
                      strength={300}
            >
                <div style={{height: "110vh"}}>

                </div>
            </Parallax>
        </div>)
}