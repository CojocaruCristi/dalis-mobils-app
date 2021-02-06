import React from "react";
import emailjs from 'emailjs-com';


import styledClasses from "./ContactSection.module.css"
import {Parallax} from "react-parallax";
import contactSectionBG from "./../../Img/contactSectionBG.jpeg"
import {Button, Form} from "react-bootstrap";


export const ContactSection = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_nc9ha6m', 'template_i99rr8m', e.target, 'user_YaJThzncJIJHUesJCjfjc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }


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
                    <div className={styledClasses.formContainer}>
                        <form className={styledClasses.contactForm} onSubmit={sendEmail}>
                            <h1 style={{color: "#E4E4E4"}} >Get feedBack</h1>
                            <input type="hidden" name="contact_number" />
                            <input  className={styledClasses.formInputs} type="text" name="user_name" placeholder={"Name"} />
                            <input className={styledClasses.formInputs} type="email" name="user_email" placeholder={"Email"} />
                            <input className={styledClasses.formInputs} type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name={"user_number"} placeholder={"Number"}/>
                            <textarea className={styledClasses.formInputs} name="message" placeholder={"Message"} />
                            <input className={styledClasses.inputButton} type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </Parallax>
        </div>)
}