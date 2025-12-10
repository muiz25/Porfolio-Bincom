import React from 'react'
import './skill.scss';
import logoF from '../../Assets/logoF.png'
import img2 from '../../Assets/img2.png'
import logo2 from '../../Assets/logo2.png'
import logo from '../../Assets/logo.png'
import logo3 from '../../Assets/logo3.png'
import logoPs from '../../Assets/logoPs.png'
import logo5 from '../../Assets/logo5.png'



const Skill = () => {
  return (
    <section id='skills' className='skills'>
      <div className='skillContent container'>
        <h3>My Skills</h3>
        <p>I am a specialist in web development/designer and open to learn</p>
        <div className='skillDiv'> 
        <ul className='skillList'>
        <li className='skillItem'>
          <div className='skill'>
            <img src={logoF} alt="Figma" />
          </div>
          <h4>Figma</h4>
        </li>
        <li className='skillItem'>
          <div className='skill'>
            <img src={img2} alt="HTML" />
          </div>
          <h4>HTML</h4>
        </li>
        <li className='skillItem'>
          <div className='skill'>
            <img src={logo2} alt="CSS" />
          </div>
          <h4>CSS</h4>
        </li>
        <li className='skillItem'>
          <div className='skill'>
            <img src={logo} alt="react" />
          </div>
          <h4>React</h4>
        </li>
        <li className='skillItem'>
          <div className='skill'>
            <img src={logo3} alt="javascript" />
          </div>
          <h4>Javascript</h4>
        </li>
        <li className='skillItem'>
          <div className='skill'>
            <img src={logoPs} alt="Photoshop" />
          </div>
          <h4>Photoshop</h4>
        </li>
        <li className='skillItem'>
          <div className='skill'>
            <img src={logo5} alt="wordpress" />
          </div>
          <h4>Wordpress</h4>
        </li>
        </ul>
        </div>
      </div>
    </section>
  )
}

export default Skill 