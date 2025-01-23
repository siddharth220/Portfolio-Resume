import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from "react";
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setletterClass] = useState('text-animate')
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
          return setletterClass('text-animate-hover')
        }, 4000);
      }, [])

      const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_bv9wezl',
            'template_o9rpxol',
            refForm.current,
            '0crVyUpKYj_LQj7Ap'
        ).then(
            () => {
                alert('Message successfully sent')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send message, please try again')
            }
        )
      }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={'Contact Me'.split('')}
                    idx={15}/>
                </h1>
                <p>
                Hello there! I'm excited to connect with you and explore potential work opportunities. As a passionate and dedicated professional, I'm constantly seeking new challenges and collaborations that allow me to apply my skills and expertise. Whether you have a project in mind, a job opening, or just want to chat about potential collaborations, I'd love to hear from you. Feel free to reach out, and let's explore how we can work together to create something amazing. Your ideas and opportunities are always welcome here!
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required/>
                            </li>
                            <li>
                                <input type='text' name='subject' placeholder='Subject' required/>
                            </li>
                            <li>
                                <textarea name='message'  placeholder='Message' required/>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND'/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default Contact;