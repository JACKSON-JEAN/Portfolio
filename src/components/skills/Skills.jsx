import React from 'react'
import './skills.css'

function Skills() {
  return (
    <div className='skills'>
        <div className='items-container'>
            <div className="skill-item">
              <p>☞ HTML</p>
              <span>Advanced</span>
            </div>
            <div className="skill-item">
              <p>☞ CSS</p>
              <span>Advanced</span>
            </div>
            <div className="skill-item">
              <p>☞ Javascript</p>
              <span>Intermediate</span>
            </div>
        </div>

        <div className='items-container'>
            <div className="skill-item">
              <p>☞ React</p>
              <span>Intermediate</span>
            </div>
            <div className="skill-item">
              <p>☞ Node</p>
              <span>Beginner</span>
            </div>
               <div className="skill-item">
                <p>☞ Mysql</p>
            <span>Intermediate</span>
            </div> 
        </div>
        
          
    </div>
  )
}

export default Skills
