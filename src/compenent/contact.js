import React, { useRef } from 'react';
// import { Alert } from 'react-alert'
import emailjs from 'emailjs-com';

export default function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8rdsx0a', 'template_vkfgr6l', form.current, "user_Kpmkz62rTE1DkeX8tSOFU")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        // document.getElementsByClassName("mail_envoyé").innerHTML = <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
        alert("un mail a était envoyer a Hadi Meriem !")

    };

    return (

            <form ref={form} onSubmit={sendEmail}>
                    <label>Name : </label>
                    <input type="text" name="name" className="input" />
                    <label>Email : </label>
                    <input type="email" name="email" className="input" />
                    <label>Message : </label>
                    <textarea name="message" id="message" />
                <input type="submit" value="Send" className="form_btn"/>
            </form>
    );
};
