import React, { useState } from 'react';
import './contact.styles.css';
import buttonImg from '../../assets/clean.png'
import locImg from '../../assets/location.png'
import phoneImg from '../../assets/phone.png'
import messageImg from '../../assets/message.png'
import FormInput from '../../components/FormInput/FormInput.component';
import Button from '../../components/button/Button.component';
import Footer from '../../components/Footer/Footer.component'
import { motion } from 'framer-motion'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className='contact-page'>
      <div className='contact-page-content'>
        <div className='contact-banner'>
          <div className='button'>
            <img src={buttonImg} />
            <p>Contact</p>
          </div>
          <h1>Let's discuss your <span className='italic'>project</span> further.</h1>
        </div>
        <div className='contact-form'>
          <div className='form-container'>
            <h2>Complete the form, we'll reach out soon.</h2>
            <FormInput name='Name' placeholder='Enter your name' state={name} setState={setName} type='text' />
            <FormInput name='Email' placeholder='Enter your email' state={email} setState={setEmail} type='email' />
            <p className='form-name'>Message</p>
            <textarea name='Message' placeholder='Enter your message' value={message} onChange={(e) => setMessage(e.target.value)} type='text' />
            <Button>Send Message</Button>
          </div>
          <div className='address-info-container'>
            <h2>Reach out Directly</h2>
            <div className='address-info'>
              <motion.div transition={{ duration: 0.5, ease: "easeOut" }} initial={{ translateX: '20px', opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }} viewport={{ once: true, margin: '-100px' }} className='address-info-item'>
                <img src={locImg} className='address-icon' />
                <h3>1234 Street Name, City Name, United States</h3>
              </motion.div>
              <hr />
              <motion.div transition={{ duration: 0.5, ease: "easeOut" }} initial={{ translateX: '20px' }} whileInView={{ translateX: 0 }} viewport={{ once: true, margin: '-100px' }} className='address-info-item'>
                <img src={phoneImg} className='address-icon' />
                <h3>+1 234 567 890</h3>
              </motion.div>
              <hr />
              <motion.div transition={{ duration: 0.5, ease: "easeOut" }} initial={{ translateX: '20px' }} whileInView={{ translateX: 0 }} viewport={{ once: true, margin: '-100px' }} className='address-info-item'>
                <img src={messageImg} className='address-icon' />
                <h3>Personal@gmail.com</h3>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;