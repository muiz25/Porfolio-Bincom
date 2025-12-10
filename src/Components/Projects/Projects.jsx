import React from 'react'
import './projects.scss';
const Projects = () => {
  return ( 
    <section id='services' className='project'>
      <div className='projContent container'>
        <h3>My Quality Services</h3>
        <div className='line'></div>
        <div className='serDiv'>
          <ul className='serList'>
            <li className='serItem'>
              <h4>01. UI/UX Design</h4>
              <p>I transform complex user challenges into intuitive, user-centered experiences. Using tools like Figma and Adobe XD, I design smooth, accessible, and visually consistent interfaces that improve usability and enhance user satisfaction. 
              </p>            
            </li>
            <li className='serItem'>
              <h4>02. Website Design</h4>
              <p>I create modern, responsive, and visually appealing website layouts that align with brand identity and engage users. My designs focus on clarity, clean structure, and seamless user flow across all devices.</p>            
            </li>
            <li className='serItem'>
              <h4>03. Web Development</h4>
              <p>I build fast, secure, and functional websites using clean, efficient code. My development process ensures smooth performance, responsiveness, and easy user interaction from start to finish.</p>            
            </li>
            <li className='serItem'>
              <h4>04. Frontend Development</h4>  
              <p>I develop responsive, interactive, and user-friendly interfaces using React, HTML, CSS, and JavaScript. My goal is to turn UI designs into functional, smooth, and high-performing digital experiences.</p>          
            </li>
            <li className='serItem'>
              <h4>04. Graphics Design</h4>  
              <p>I design striking visual content—from banners and posters to social media creatives—that communicates clearly and strengthens brand presence. My work balances creativity with purpose to deliver high-quality visuals.</p>          
            </li>
            <li className='serItem'>
            <h4>04. Logo Design</h4>  
            <p>I craft memorable and scalable logo designs that capture a brand’s identity in a simple and impactful way. Each logo is designed to be unique, versatile, and instantly recognizable.</p>          
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects