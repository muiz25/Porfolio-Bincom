import React from 'react'
import './home.css'
import img1 from '../../Assets/img1.png'
import myPic from '../../Assets/mypics.png'
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandDribbbleFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import myCV from '../../Assets/myCV.pdf';



export const Home = () => {
  return (
    <section className='home'>
      <div className='homeContent container'>
        <span data-aos='fade-up' className='smallText'>I am Muiz</span>
        <div className='picBox'></div>
        <div className='ipicBox'></div>
        <img src={img1} alt="" className='img1' />
        <img src={myPic} alt="" className='mypic' />
        <h1 data-aos='fade' className='mainText'>Web Developer + Digital Designer</h1>
        <p>I’m a passionate UI/UX Designer, Frontend Developer, Graphic & Logo Designer, and Website Designer. Whether you’re looking for intuitive user interfaces, stunning visuals, responsive websites, or impactful brand identities, I offer a range of design and development services tailored to bring your ideas to life now.</p>
        <li className='tnList '>
        <button className='tn1'><a  href={myCV}>DOWNLOAD CV</a></button>
        <button className='tn2'><a href="https://github.com/muiz25"><FiFacebook className='itn1 icon' /></a></button>
        <button className='tn3'><a href="https://x.com/IjadunolaMuiz"><FaXTwitter className='xtn icon'  /></a></button>
        <button className='tn4'><TbBrandDribbbleFilled className='dtn icon' /></button>
        <button className='tn5'><FaLinkedinIn className='ltn icon' href='https://github.com/muiz25'/></button>
        <button className='tn6'><FaGithub className='gtn icon'/></button>
        </li>
        <div className='ach flex'>
          <li className='achList'>
            <p  className='nach'>years of experience</p>
            <h2> 4+</h2>
          </li>
          <li className='achList'>
            <p  className='nach1'>projects Completed</p>
            <h2>40+</h2>
          </li>
          <li className='achList'>
            <p className='nach2'>Customer Testimonies</p>
            <h2>20+</h2>
          </li>
          <li className='achList'>
            <p  className='nach3'>Digital Skill</p>
            <h2>4+</h2>
          </li>
        </div>

      </div>
    </section>
  )
}

export default Home