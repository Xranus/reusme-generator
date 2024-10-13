import React, { useEffect, useRef } from 'react';
import { FaDownload } from "react-icons/fa6";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiCursorArrowRipple } from "react-icons/hi2";
import { GoArrowRight } from "react-icons/go";
import Aos from 'aos';
import 'aos/dist/aos.css';

function Landing() {
  const LearnRef = useRef(null);

  function handleScroll() {
    LearnRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="landing">
      <div className="landingContent">
        <h1 className="headingText" data-aos="zoom-in-down">
          Build and Download Your Resume Now <br /> Simple, Fast, Professional
        </h1>
        <div className="landingButtons" data-aos="zoom-in-up">
          <button 
            style={{
              backgroundColor: 'transparent',
              padding: '11px 19px',
              border: '1px solid #3A6D8C'
            }} 
            onClick={handleScroll}>
            Learn More
          </button>
          <button><span>Start Making</span><GoArrowRight className="forwardArrow" /></button>
        </div>

        <section className="learnMore" ref={LearnRef}>
          <h2>Learn More</h2>
          <div className="keyFeatures">
            <h3 style={{marginLeft: '12px'}}>Key Features</h3>
            <ul>
              <li data-aos="fade-right">Customizable Templates
                <p>A number of templates available.</p>
              </li>
              <li data-aos="fade-left">PDF Download
                <p>Easy export to PDF</p>
              </li>
              <li data-aos="fade-right">Fast and UserFriendly
                <p>Offers simplicity and speed</p>
              </li>
            </ul>
          </div>
          <div className="steps">
            <h3 style={{marginLeft: '12px'}}>How It Works (Steps)</h3>
            <ul className="ssteps">
              <li>
                <HiCursorArrowRipple />
                <p>Select a Template</p>
                <span>Choose from a variety of professionally designed templates.</span>
              </li>
              <li>
                <BiMessageSquareDetail />
                <p>Fill In Your Details</p>
                <span>Input your personal information, experience, and skills.</span>
              </li>
              <li>
                <FaDownload />
                <p>Download as PDF</p>
                <span>Get your resume instantly in PDF format.</span>
              </li>
            </ul>
          </div>
        </section>
        <div className="landingButtons">
          <button><span>Start Making</span><GoArrowRight className="forwardArrow" /></button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
