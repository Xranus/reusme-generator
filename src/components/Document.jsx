import React from 'react'
import '/src/document.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
function Document({rref}) {
  return (
    <div className='document' ref={rref}>
      <div className='container'>
        <p className='Name'>Muhammad Hassan</p>
        <p className='position'>Front End Web Developer</p>
        <div className='contact'>
            <div>
                <FaPhoneAlt className='icon' />
                <p className='contact-text'>+92 3243336401</p>
            </div>
            <div>
                <MdAlternateEmail className='icon' />
                <p className='contact-text'>mehassan3454@gmail.com</p>
            </div>
            <div>
                <IoLocationSharp className='icon' />
                <p className='contact-text'>Bahawalpur, Punjab, Pakistan</p>
            </div>
            <div>
                <FaLink className='icon' />
                <p className='contact-text'>github.com/Xranus</p>
            </div>
        </div>
        <div className='experience'>
            <h2>EXPERIENCE</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Error consequatur, iste sint dolorem sed quasi nesciunt iusto.
                Dolorum quia qui, minima exercitationem soluta commodi assumenda ea deserunt! 
                Accusantium, voluptatum vero? (This part will be automated by AI)</p>
        </div>
        <div>
          <h2>Skills</h2>
          <ul>
            <li>Java</li>
            <li>c++</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div>
          <h2>EDUCATION</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Veritatis culpa sit iure et sed! Necessitatibus fuga molestias in libero cupiditate.
          </p>
        </div>
        <div>
          <h2>SUMMARY / WHY HIRE YOU?</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Ipsa fugit dolorem tempore mollitia a, 
            non provident laborum! Saepe ipsam eius voluptatibus corrupti nulla!
             Dolore quas nostrum perferendis obcaecati suscipit voluptatibus laudantium qui deleniti illum repellendus?
              Dolore necessitatibus facilis nulla dolorem veniam totam, 
              veritatis error voluptate at aliquid maiores aliquam quas!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Document
