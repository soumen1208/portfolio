import React, { useContext, useRef, useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context/Context';

const Contact = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_rmunw6k', 'template_gx85stg', form.current, {
                publicKey: 'T-HGeXCngu5RrTj7J',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setDone(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }


    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span style={{ color: darkMode ? 'white' : '' }} >Get in touch</span>
                    <span>Contact me</span>
                </div>
                <div className="blur blurdiv1"></div>
            </div>

            <div className="c-right">
                <form action="" ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" placeholder='Name' className='user' />
                    <input type="email" name="user_email" placeholder='email' className='user' />
                    <textarea name="message" className='user' placeholder='text here'></textarea>
                    <input type="submit" value='send' className='button' />
                    <span>{done && "You have successfully send your messages"}</span>
                    <div className="blur blurdiv2"></div>
                </form>
            </div>
        </div>
    )
}

export default Contact;