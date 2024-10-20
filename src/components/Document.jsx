import React, { useState } from 'react'
import '/src/document.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
function Document({rref}) {

  const information = {

      name: 'Muhammad Hassan',
      position: 'Front End Web Developer',
      phone: '03243336401',
      email: 'mehassan3454@gmail.com',
      adress: 'samaSatta',
      externalLinks: 'any',

      experience: [
        {companyName: "Google",designation: 'Software Engineer',years: '3 years'},
      ],
      skills: [
        'java', 'C++', 'HTML', 'CSS', 'JS', 'React'
      ],
      achievements: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, soluta. Corrupti, ad?"
      ],
      education:[
        {degree: 'Bachelors', program: 'Computer Science', grade: 'A', institute: "Islamia University Bahawalpur"}
      ],
      summary: "will figure it out using AI"
  }
  const [info] = useState(information)
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
    <div className='document' ref={rref}>
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
          <h3>SUMMARY / WHY HIRE YOU?</h3>
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
