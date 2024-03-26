import React,{useState, useContext} from 'react'
import{FaBars, FaTimes, FaMoon, FaStar} from 'react-icons/fa'
import{Link} from 'react-scroll'
import {themeContext} from '../../App'
import LightMode from '../lightMode/LightMode'
import './navbar.css'

import{MenuLinks} from '../../Links'

const Navbar = () => {

    const[isNavOpen, setIsNavOpen]=useState(false)
    const{toggleTheme, theme}=useContext(themeContext)


  return (
    <div className='navbar'>
      <p className="logo">Jackson</p>
      <div className={isNavOpen?"menu close-menu":"menu"}>
        {
            MenuLinks.map((link)=>{
                const{id, name, icon}=link
                return(
                    <Link href="#" onClick={()=>setIsNavOpen(!isNavOpen)} key={id}><span className='menu-icon'>{icon}</span> {name}</Link>
                )
            })
        }
      </div>
      <div className='menu-tagle' onClick={()=>setIsNavOpen(!isNavOpen)}>
        {isNavOpen?<FaTimes className='icon'/>:<FaBars className='icon'/>}
      </div>
      <div className='color-mode' onClick={()=>toggleTheme()}>
        <LightMode/>
        <p>{theme==='light'?'Light theme':'Dark theme'}</p>
      </div>  
    </div>
  )
}

export default Navbar
