import React,{useContext, useState} from 'react'
import './about.css'
import{themeContext} from '../../App'
import about from '../../assets/about.JPG'
import about2 from '../../assets/about2.JPG'
import {FaGraduationCap, FaFilePdf, FaChild, FaPhone} from 'react-icons/fa'
import {TbCertificate} from 'react-icons/tb'
import Skills from '../../components/skills/Skills'
import Bio from '../../components/bio/Bio'

const About = () => {
    const{theme}=useContext(themeContext)

  return (
    <div className='about-wrapper' id='about'>
      <div className="about-header">
        <p><b>About me</b></p>
      </div>
      <div className="about-container" >
            <section className="about-img">
                {theme==='light'?<img src={about2} alt="" />:<img src={about} alt="" />}
                
            </section>
            <section className="about-section">
                <div className="about-btns">
                    <div className="about-btn">
                        <FaChild className='about-icon'/>
                        <p className='about-item-haeder'><b>Bio</b></p>
                        <p className='about-readmore-link'>Read More →</p>
                    </div>
                    <div className="about-btn">
                        <FaGraduationCap className='about-icon'/>
                        <p className='about-item-haeder'><b>Skills</b></p>
                        <p className='about-readmore-link'>Read More →</p>
                    </div>
                    <div className="about-btn">
                        <TbCertificate className='about-icon'/>
                        <p className='about-item-haeder'><b>Experience</b></p>
                        <p className='about-readmore-link'>Read More →</p>
                    </div>
                </div>
                <div className="abt-main">
                    <div className="abt-main-body">
                        <Bio/>
                        {/* <Skills /> */}
                    </div>
                    <a href="#">talk to me <FaPhone/></a>
                </div>
            </section>
        </div>
    </div>
  )
}

export default About
