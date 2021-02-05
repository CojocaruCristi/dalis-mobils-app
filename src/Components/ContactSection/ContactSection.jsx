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
                        <form className="contact-form" onSubmit={sendEmail}>
                            <input type="hidden" name="contact_number" />
                            <label>Name</label>
                            <input type="text" name="user_name" />
                            <label>Email</label>
                            <input type="email" name="user_email" />
                            <label>Number</label>
                            <input type="text" name={"user_number"}/>
                            <label>Message</label>
                            <textarea name="message" />
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </Parallax>
        </div>)
}