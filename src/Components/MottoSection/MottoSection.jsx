import React from "react";
import {Parallax} from 'react-parallax';
import styledClasses from "./MottoSection.module.css"
import logo from "../../Img/logo.jpg";
import {Image} from "react-bootstrap";
import MottoSectionBG from "./../../Img/mottoSectionBG.jpg"

export const MottoSection = () => {
    return (
        <div id={"top"}>
            <Parallax blur={3}
                      bgImage={MottoSectionBG}
                      strength={300}
                      >
                <div style={{height: "110vh"}}>
                    <div className={styledClasses.inlineStyle}>
                        <Image src={logo} width={"110"} height={"110"} roundedCircle/>
                        <h1 className={styledClasses.mottoSectionH1}>Your imagination, our work.</h1>
                        <hr className={styledClasses.mottoSectionHr}/>
                        <h2 className={styledClasses.mottoSectionH2}>Mobilă la comandă <br/> realizăm design mobiliar individual <br/> livrarea și montarea în raza Chișinăului este Gratis </h2>
                    </div>
                </div>
            </Parallax>
        </div>


    )
}