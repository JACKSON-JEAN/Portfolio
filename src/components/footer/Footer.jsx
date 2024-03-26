import React from 'react'
import './footer.css'
import{FaFacebookF, FaTwitter,FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <p className="name">Jackson</p>
        <div className="footer-menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-socials">
          <a href="#"><FaFacebookF/></a>
          <a href="#"><FaTwitter/></a>
          <a href="#"><FaLinkedinIn/></a>
        </div>
      </div>
      <section className="copyright-section">
        <p>&copy;2023 Copyright. All rights reserved.</p>
      </section>
    </div>
  )
}

export default Footer
