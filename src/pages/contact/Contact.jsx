import React,{useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaPaperPlane, FaWhatsapp, FaRegEnvelope, FaPhone} from 'react-icons/fa'
import './contact.css'

const Contact = () => {
    const[sender, setSender]=useState({user_name:'',user_email:'',message:''})
    const form = useRef()

    const sendEmail = () => {

    emailjs.sendForm('service_mwb53q9', 'template_u2aqlr9', form.current, 'SngGnFzSVRv1w1pBI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleChange=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setSender({...sender,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(sender.user_name && sender.user_email && sender.message){
        sendEmail()
        toast.success('Message sent', {
           position: "top-center",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "light",
        });
        setSender({user_name:'',user_email:'', message:''})
    }
    else{
        toast.error('Fill all fields!', {
           position: "top-center",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "light",
        });
    }
    
  }

  return (
    <div className='contact-wrapper' id='contact' >
      <section className="contact-socials">
        <p className="contact-socials-header"><b>Talk to me</b></p>
        <div className="contact-socials-wrapper">
            <div>
                <span className="contact-icon">
                    <FaRegEnvelope/>
                </span>
                <span className="contact-info">
                    <p><b>Email</b></p>
                    <p>jacksonuwizeye27@gmail.com</p>
                </span>
                <p className="read-more">Write me →</p>
            </div>
            <div>
                <span className="contact-icon">
                    <FaWhatsapp/>
                </span>
                <span className="contact-info">
                    <p><b>Whatsapp</b></p>
                    <p>+256 776 286 453</p>
                </span>
                <p className="read-more">Write me →</p>
            </div>
            <div>
                <span className="contact-icon">
                    <FaPhone/>
                </span>
                <span className="contact-info">
                    <p><b>Phone</b></p>
                    <p>+256 776 286 453</p>
                </span>
                <p className="read-more">Write me →</p>
            </div>
        </div>
      </section>
      <section className="contact-form">
        <p className="contact-socials-header"><b>Write me your project</b></p>
        <form ref={form} onSubmit={handleSubmit}>
            <div className="form-container">
                <div className="form-input">
                    <input type="text" placeholder='Name...' name="user_name" value={sender.user_name} onChange={handleChange}/>
                    <div className="input-lebel">Name</div>
                </div>
                <div className="form-input">
                    <input type="email" placeholder='Email...' name="user_email" value={sender.user_email} onChange={handleChange}/>
                    <div className="input-lebel">Email</div>
                </div>
                <div className="form-text-input">
                    <div className="input-lebel">Message</div>
                    <textarea placeholder='Message...' name="message" value={sender.message} onChange={handleChange}></textarea>
                </div>
            </div>
            <button type='submit'>send message <FaPaperPlane/></button>
            <ToastContainer className='toastify'/>
        </form>
      </section>
    </div>
  )
}

export default Contact
