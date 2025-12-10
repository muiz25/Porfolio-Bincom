import React from 'react';
import './client.css';

const Client = () => {
  return (
    <section id='client' className='project'>
      <div className='projContent container'>
        <h3>Testimonials</h3>
        <div className='line'></div>
        <div className='serDiv'>
          <ul className='serList'>
            <li className='serItem'>
              <h4>Hameed 
                <p>CTO Fooddy</p></h4>
              <p>I transform complex user challenges into intuitive, user-centered experiences. Using tools like Figma and Adobe XD, I design smooth, accessible, and visually consistent interfaces that improve usability and enhance user satisfaction. 
              </p>            
            </li>
            <li className='serItem'>
              <h4>Gbenga <p>PM Sabi</p></h4>
              <p>I create modern, responsive, and visually appealing website layouts that align with brand identity and engage users. My designs focus on clarity, clean structure, and seamless user flow across all devices.</p>            
            </li>
            <li className='serItem'>
              <h4>
                George
                <p>PM Flexee</p>
              </h4>
              <p>I build fast, secure, and functional websites using clean, efficient code. My development process ensures smooth performance, responsiveness, and easy user interaction from start to finish.</p>            
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Client