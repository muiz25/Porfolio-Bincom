import React from 'react'
import { useState } from 'react';
import './navbar.scss'
import { MdTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import myCV from '../../Assets/myCV.pdf';


const Navbar = () => {
  const [active,setActive] = useState('navBar')

  const showNav = () => {
    setActive('navBar activeNavbar')
  }

  const removeNavbar = () => { 
    setActive('navBar')
  }
  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <a href="#" className='logo flex'>
            <h1><MdTravelExplore className='icon'/>MDH</h1>
          </a>
        </div>
        <div className={active}>
              <ul className='navList flex'>
                <li className='navItem'>
                  <a href='#services' className='navLink'>Services</a>
                </li>
                <li className='navItem'>
                  <a href='#projects' className='navLink'>Projects</a> 
                </li>
                <li className='navItem'>
                  <a href={myCV} className='navLink'>Resume</a>
                </li>
                <li className='navItem'>
                  <a href='#skills' className='navLink'>Skill</a>
                </li>
                <li className='navItem'>
                  <a href='#client' className='navLink'>Testimonial</a>
                </li>
                <li className='navItem'>
                  <a href='#contact' className='navLink'>Contact</a>
                </li>
                <button className='btn'>
                  <a  href={myCV}>DOWNLOAD CV</a>
                </button>
              </ul>
              <div onClick={removeNavbar} className='closeNavbar'>
              <IoIosCloseCircle className='icon'/>
              </div>
            </div>
            <div className='toggleNavbar' onClick={showNav}>
            <TbGridDots className='icon'/>
            </div>
      </header>
    </section>
  )
}

export default Navbar