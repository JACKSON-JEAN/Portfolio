import React from 'react'
import './home.css'
import profile from '../../assets/me2.png'
import {FaFilePdf, FaLinkedinIn, FaTwitter, FaFacebookF} from 'react-icons/fa'

const Home = () => {
  return (
    <div className='home' id='home'>
      <div className="hello-section">
        <section className="hello-socials">
          <a href="#"><FaLinkedinIn/></a>
          <a href="https://twitter.com/jackson_uwizeye"><FaTwitter/></a>
          <a href="#"><FaFacebookF/></a>
        </section>
        <section className="hello-bio">
          <p className="name"><b>Uwizeye Jackson</b></p>
          <div className="hello-header">
            <div></div>
            <p><b>Web developer</b></p>
          </div>
          <p className='hello-statement'>I'm a frontend react js developer based in Kampala-Uganda,
          and I'm passionate and dedicated to my work.</p>
          <div className="my-cv">
            <a href="#"><span>My Resume</span> <FaFilePdf/></a>
          </div>
          
        </section>
        
        
      </div>
      <div className="profile-img">
        <img src={profile} alt="" />
      </div>  
    </div>
  )
}

export default Home
