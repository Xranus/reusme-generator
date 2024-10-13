import React, { useEffect } from 'react'
import Background from './Background'
import { GoArrowRight } from "react-icons/go"
import Aos from 'aos'
import 'aos/dist/aos.css'

function Landing() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div className='landing'>
      <div className="landingContent">
        <h1 className='headingText' data-aos="zoom-in-down">Build and Download Your Resume Now <br /> Simple, Fast, Professional</h1>
        <div className='landingButtons' data-aos="zoom-in-up">
          <button><span>Start Making</span><GoArrowRight className='forwardArrow' /></button>
        </div>
        <div className='landingImage'>
          <img src="https://cdn-icons-png.freepik.com/256/13386/13386846.png?semt=ais_hybrid" alt="resume" />
          <p className='popUp'>Make It Look Professional</p>
        </div>
      </div>
    </div>
  )
}

export default Landing
