import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <div className='footer'>
      <div className="footerIcons">
        <a href="https://www.instagram.com/uranus.rar/" target='_blank'>
           <FaInstagram className='footerIconsShape'/> 
        </a>
        <a href="https://github.com/Xranus" target='_blank'>
            <FaGithub className='footerIconsShape'/>
        </a>
        <a href="https://www.linkedin.com/in/muhammad-hassan-53307b333?" target="_blank">
            <FaLinkedin className='footerIconsShape'/>
        </a>
      </div>
      <p>Copyright 2024 - All rights reserved by <a target='_blank' style={{textDecoration: 'none'}} href="https://github.com/Xranus">Muhammad Hassan</a></p>
    </div>
  )
}

export default Footer
