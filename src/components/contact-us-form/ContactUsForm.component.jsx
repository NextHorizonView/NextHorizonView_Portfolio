import React, { useState } from 'react'
import './ContactUsForm.styles.css'
import Header from '../home-section-header/Header.component'
import InstImg from '../../assets/insta.png'
import LinkedIn from '../../assets/linkedin.png'
import TwitterImg from '../../assets/twitter.png'
import FormInput from '../FormInput/FormInput.component'
import Button from '../button/Button.component'

const ContactUsForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')


    return (
        <section className='contact-us-form-section'>
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
                        <h4>(123) 456 7890</h4>
                    </div>
                    <div className=''>
                        <p>Address:</p>
                        <h4>Street Address, Your City, State, Zip Code, Country</h4>
                    </div>
                    <hr />
                    <div>
                        <p>Follow us</p>
                        <div className='social-link-container'>
                            <img src={LinkedIn} />
                            <img src={TwitterImg} />
                            <img src={InstImg} />
                        </div>
                    </div>
                </div>
                <div className='flex-item flex-item-2'>
                    <form className=''>
                        <div className='basic-detail'>
                            <FormInput name='Name' placeholder='Enter your name' state={name} setState={setName} type='text' />
                            <FormInput name='Email' placeholder='Enter your email' state={email} setState={setEmail} type='email' />
                        </div>
                        <div className=''>
                            <p className='form-name'>Message</p>
                            <textarea placeholder='Enter your message here' name='message' id='message'></textarea>
                        </div>
                        <Button>Send Message</Button>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default ContactUsForm