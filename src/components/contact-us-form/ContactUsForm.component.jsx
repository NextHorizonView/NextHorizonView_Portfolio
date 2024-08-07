import React, { useState, useRef } from 'react'
import './ContactUsForm.styles.css'
import Header from '../home-section-header/Header.component'
import FormInput from '../FormInput/FormInput.component'
import Button from '../button/Button.component'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons';


const ContactUsForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [messageSent, setMessageSent] = useState(false);
    const [messageSuccess, setMessageSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm('service_fu2t0or', 'template_ty9wa8s', form.current, {
                publicKey: 'xc4inZweR4qR95-7U',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setLoading(false);
                    setMessageSuccess(true);
                    setMessageSent(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setMessageSent(true);
                    setLoading(false);
                    setMessageSuccess(false);
                },
            );
    };

    return (
        <section className='contact-us-form-section' id='contact-form'>
            <div className='project-btn'>Contact Us</div>
            <Header>Reach out to <span className='italic'>us</span></Header>
            <div className='contact-us-form'>
                <div className='flex-item flex-item-1'>
                    <h3>Get in touch</h3>
                    <hr />
                    <div className=''>
                        <p>Email</p>
                        <h4>support@horizonview.in</h4>
                    </div>
                    <div className=''>
                        <p>Phone:</p>
                        <h4>+91 7400381491</h4>
                    </div>
                    <div className=''>
                        <p>Address:</p>
                        <h4>Vile Parle, Mumbai 400057, Maharashtra, India</h4>
                    </div>
                    <hr />
                    <div>
                        <p>Follow us</p>
                        <div className='social-link-container'>
                            <a target='_blank' className='social-link' href='https://www.linkedin.com/company/horizon-views/'><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a target='_blank' className='social-link' href='https://www.instagram.com/nexthorizonview/profilecard/?igsh=MW1uZHJneWNtYnkwcg=='><FontAwesomeIcon icon={faInstagram} /></a>
                            <a target='_blank' className='social-link' href='https://x.com/nexthorizonview/'><FontAwesomeIcon icon={faXTwitter} /></a>
                        </div>
                    </div>
                </div>
                <div className='flex-item flex-item-2'>
                    <form ref={form} className='' onSubmit={sendEmail}>
                        <div className='basic-detail'>
                            <FormInput text='Name' name='from_name' placeholder='Enter your name' state={name} setState={setName} type='text' />
                            <FormInput text='Email' name='from_email' placeholder='Enter your email' state={email} setState={setEmail} type='email' />
                        </div>
                        <div className=''>
                            <p className='form-name'>Message</p>
                            <textarea placeholder='Enter your message here' name='message' id='message'></textarea>
                        </div>
                        {
                            !messageSent && !loading && !messageSuccess ? <Button type='submit'>Send Message</Button> :
                                loading ? <p className='loading-message'>Sending....</p> :
                                    messageSuccess ? <p className='success-message'>Your message is sent successfully</p> : <p className='fail-message'>Your message could not be sent. Please try again later.</p>
                        }

                    </form>
                </div>
            </div>
        </section>

    )
}

export default ContactUsForm