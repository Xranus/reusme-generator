import React, { useState } from 'react'
import '/src/document.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import { usePDF } from 'react-to-pdf';

function Document({obg}) {
  const {toPDF, targetRef} = usePDF({filename:"file.pdf"})
  const [info] = useState(obg)
  const exptemp = [
    (el) => `Served as a ${el.designation} at ${el.companyName} for ${el.years}, contributing to key projects and business goals.`,
    (el) => `Worked as a ${el.designation} at ${el.companyName} for ${el.years}, responsible for delivering high-quality solutions in line with the company’s objectives.`,
    (el) => `Held the position of ${el.designation} at ${el.companyName} for ${el.years}, successfully leading/participating in major initiatives to improve performance and efficiency.`,
    (el) => `As a ${el.designation} at ${el.companyName}, worked collaboratively for ${el.years} to achieve organizational goals and drive project success.`,
    (el) => `Over ${el.years} as a ${el.designation} at ${el.companyName}, applied advanced skills in ${el.relevantSkill || 'various technologies'} to deliver impactful results.`,
  ]
  const educationTemplates = [
    (el) => `Graduated with a ${el.degree} in ${el.program} from ${el.institute}, achieving a grade of ${el.grade}.`,
    (el) => `Earned a ${el.degree} in ${el.program} from ${el.institute} with a final grade of ${el.grade}.`,
    (el) => `${el.degree} in ${el.program} from ${el.institute}, completed with an impressive grade of ${el.grade}.`,
    (el) => `Completed ${el.degree} in ${el.program} at ${el.institute}, achieving a grade of ${el.grade}.`,
    (el) => `Successfully obtained a ${el.degree} in ${el.program} from ${el.institute}, securing a grade of ${el.grade}.`,
  ]

  return (
    <div>
      <button className='downloadBtn' onClick={()=> {
        toPDF()
        }}>Download</button>
    <div className='border'>
    <div className='document' ref={targetRef}>
      <div className='container'>
        <p className='Name' style={{fontSize: '2.5rem'}}>{info.name}</p>
        <p className='position' style={{color: 'grey'}}>{info.position}</p>
        <div className='contact'>
            <div>
                <FaPhoneAlt className='icon' />
                <p className='contact-text'>{info.phone}</p>
            </div>
            <div>
                <MdAlternateEmail className='icon' />
                <p className='contact-text'>{info.email}</p>
            </div>
            <div>
                <IoLocationSharp className='icon' />
                <p className='contact-text'>{info.adress}</p>
            </div>
            <div>
                <FaLink className='icon' />
                <p className='contact-text'>{info.externalLinks}</p>
            </div>
        </div>
        <div className='experience'>
            <h3>EXPERIENCE</h3>
            <ul>
            {
              info.experience.map((el, index)=>{
                const template = exptemp[index % exptemp.length]
                return (
                  <li key={index}>
                    {template(el)}
                  </li>
                )
              })
            }
            </ul>
        </div>
        <div>
          <h3>Skills</h3>
          <ul>
            {
              info.skills.map((el,index)=>{
                return (
                  <li key={index}>{el}</li>
                )
              })
            }
          </ul>
        </div>
        <div>
          <h3>REMARKABLE ACHIEVEMENTS</h3>
          <ul>
              {
                info.achievements.map((el,index)=>{
                  return (
                    <li key={index}>{el}</li>
                  )
                })
              }
          </ul>
        </div>
        <div>
          <h3>EDUCATION</h3>
          <ul>
              {
                info.education.map((el, index) => {
                  const template = educationTemplates[index % educationTemplates.length];
                  return (
                    <li key={index}>
                      {template(el)}
                    </li>
                  );
                })
              }
          </ul>
        </div>
        <div>
              
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Document
