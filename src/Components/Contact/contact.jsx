import React from 'react'
import './contact.scss';
import pF from '../../Assets/Fpic1.jpeg'
import pF1 from '../../Assets/Fpic2.jpeg'
import pF2 from '../../Assets/Fpic3.jpeg'
import pF3 from '../../Assets/Fpic.jpeg'

const contact = () => {
  return (
    <section id='contact' className='contact' >
        <div className='coContent container'>
            <div className='coGrid'>
            <img src={pF} alt="" className='picf'/>
            <img src={pF1} alt="" className='picf' />
            <img src={pF2} alt="" className='picf'/>
            <img src={pF3} alt="" className='picf'/>
            </div>
            <div className='coCont'>
                <div className='coForm'>
                    <h1 className='add'>Contact Me</h1>
                    <div className='line'></div>
                    <a href='mailto:ijadunolamuizz@gmail.com'>=ijadunolamuizz@gmail.com</a>
                    <h1 className='add'>09022667419</h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default contact