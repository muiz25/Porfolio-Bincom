import React from 'react';
import './rproject.scss';
import { FaLocationDot } from "react-icons/fa6";
import Pr1 from '../../Assets/Desktop - 1.png'
import Pr2 from '../../Assets/Dashboard 3.png'
import Pr3 from '../../Assets/6.png'

const Rproject = () => {
  return (
    <section id='projects' className='rProject'>
        <div className='rProjContent container'>
            <h3>MY Recent Projects</h3>
            <div className='line'></div>
            <div className='rpBar'>
                <ul className='rpLst '>
                    <li className='rpItm'>
                        <a href='#' className='rpLink'>All</a>
                    </li>
                    <li className='rpItm'>
                        <a href='#' className='rpLink'>UI/UX</a> 
                    </li>
                    <li className='rpItm'>
                        <a href='#' className='rpLink'>Website</a>
                    </li>
                    <li className='rpItm'>
                        <a href='#' className='rpLink'>Logos</a>
                    </li>
                    <li className='rpItm'>
                        <a href='#' className='rpLink'>Graphics</a>
                    </li>
                </ul>
            </div>
            <div className='rpMain'>
                <div className='rpTest'>
                    <img className='rpImg' src={Pr1} alt="" />
                    <div className='rpTle'>
                        <h5>FOODDY</h5>
                        <h5 className='dte'>2021-2023</h5>
                        <h4>UI/UX DESIGNER</h4>
                        <p>LAGOS NIGERIA</p>
                        <a href="" className='ltn'>< FaLocationDot /></a>
                    </div>
                </div>
                <div className='rpTest'>
                    <img className='rpImg' src={Pr2} alt="" />
                    <div className='rpTle'>
                        <h5>FOODDY</h5>
                        <h5 className='dte'>2021-2023</h5>
                        <h4>UI/UX DESIGNER</h4>
                        <p>LAGOS NIGERIA</p>
                        <a href="" className='ltn'>< FaLocationDot /></a>
                    </div>
                </div>
                <div className='rpTest'>
                    <img className='rpImg' src={Pr3} alt="" />
                    <div className='rpTle'>
                        <h5>FOODDY</h5>
                        <h5 className='dte'>2022-2023</h5>
                        <h4>WEB DEVELOPMENT</h4>
                        <p>LAGOS NIGERIA</p>
                        <a href="" className='ltn'>< FaLocationDot /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg'></div>
    </section>
  )
}

export default Rproject