import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import { CiSquarePlus } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go"
import { useNavigate } from 'react-router-dom';

function Form({infofn}) {
  const navigate = useNavigate()
  const [eduArray, setEduArray] = useState([{degree: '', program: '', grade: '', institute: ''}]);
  const [skillsArray, setSkillsArray] = useState(['']);
  const [experienceArray, setExperienceArray] = useState([{companyName: '', designation: '', years: ''}]);
  const [achievmentArray, setAchievmentArray] = useState([''])

  useEffect(() => {
    Aos.init();
  }, []);

  const handleMoreEdu = () => {
    setEduArray([...eduArray, {degree: '', program: '', grade: '', institute: ''}]);
  };

  const handleMoreSkills = () => {
    setSkillsArray([...skillsArray, '']);
  };
  const handleMoreScheivements = () => {
    setAchievmentArray([...achievmentArray, '']);
  };
  const handleMoreExperience = () => {
    setExperienceArray([...experienceArray, {companyName: '', designation: '', years: ''}]);
  };

  const handleChange = (e, index, array, setArray) => {
    const { name, value } = e.target;
    const updatedArray = [...array];
    updatedArray[index][name] = value;
    setArray(updatedArray);
  };
  const handleSubmit = () => {
    const personalInfo = {
      name: document.getElementById('Iname').value,
      position: document.getElementById('position').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      adress: document.getElementById('adress').value,
      externalLinks: document.getElementById('link').value,
    };
  
    const information = {
      ...personalInfo,
      education: eduArray,
      skills: skillsArray,
      experience: experienceArray,
      achievements: achievmentArray,
    };
  console.log(information)
    infofn(information)
    navigate('/document')
  };
  
  return (
    <form className='form' data-aos="fade-left" onSubmit={handleSubmit}>
      <div className='information'>
        <div>
          <h1>Personal Information</h1>
          <label htmlFor="Iname">Full Name <span>*</span></label>
          <input type="text" placeholder='John Doe' name="name" id="Iname" required />
          
          <label htmlFor="position">Position you're aiming for <span>*</span></label>
          <input required type="text" placeholder='Frontend Web Developer' id='position' name='position' />
          
          <label htmlFor="email">Email <span>*</span></label>
          <input required type='email' placeholder='unknown@example.com' id='email' name='email' />
          
          <label htmlFor="adress">Address <span>*</span></label>
          <input required type='text' placeholder='John Doe, 456 Elm Street, Suite 3, Los Angeles, CA 90001, USA' id='adress' name='adress' />
          
          <label htmlFor="phone">Phone <span>*</span></label>
          <input required type='text' placeholder='(555) 555-1234' id='phone' name='phone' />
          
          <label htmlFor="link">Any External Links related to you <span>*</span></label>
          <input required type='text' placeholder='example.com' id='link' name='link' />

          <h1>Education</h1>
          <div className='information'>
            {eduArray.map((edu, index) => (
              <div key={index} data-aos="fade-up">
                <label htmlFor={`degree-${index}`}>Degree</label>
                <input required type="text" name="degree" id={`degree-${index}`} placeholder="Bachelors" value={edu.degree} onChange={(e) => handleChange(e, index, eduArray, setEduArray)} />

                <label htmlFor={`program-${index}`}>Program</label>
                <input required type="text" name="program" id={`program-${index}`} placeholder="Computer Science" value={edu.program} onChange={(e) => handleChange(e, index, eduArray, setEduArray)} />

                <label htmlFor={`grade-${index}`}>Grade</label>
                <input required type="text" name="grade" id={`grade-${index}`} placeholder="A" value={edu.grade} onChange={(e) => handleChange(e, index, eduArray, setEduArray)} />

                <label htmlFor={`institute-${index}`}>Institute</label>
                <input required type="text" name="institute" id={`institute-${index}`} placeholder="ABC University" value={edu.institute} onChange={(e) => handleChange(e, index, eduArray, setEduArray)} />
              </div>
            ))}
            <CiSquarePlus onClick={handleMoreEdu} className='plus' />
          </div>

          <h1>Skills</h1>
          <div className='skills'>
            {skillsArray.map((skill, index) => (
              <div key={index} data-aos="fade-up">
                <input required type="text" placeholder='JavaScript' value={skill} onChange={(e) => {
                  const newSkills = [...skillsArray];
                  newSkills[index] = e.target.value;
                  setSkillsArray(newSkills);
                }} />
              </div>
            ))}
            <CiSquarePlus onClick={handleMoreSkills} className='plus' />
          </div>

          <h1>Experience</h1>
          <div className='experience'>
            {experienceArray.map((exp, index) => (
              <div key={index} data-aos="fade-up" >
                <label htmlFor={`companyName-${index}`}>Company Name {index+1}</label>
                <input required type="text" name="companyName" id={`companyName-${index}`} placeholder="Google" value={exp.companyName} onChange={(e) => handleChange(e, index, experienceArray, setExperienceArray)} />

                <label htmlFor={`designation-${index}`}>Designation</label>
                <input required type="text" name="designation" id={`designation-${index}`} placeholder="Software Engineer" value={exp.designation} onChange={(e) => handleChange(e, index, experienceArray, setExperienceArray)} />

                <label htmlFor={`years-${index}`}>Years</label>
                <input required type="text" name="years" id={`years-${index}`} placeholder="3 years" value={exp.years} onChange={(e) => handleChange(e, index, experienceArray, setExperienceArray)} />
              </div>
            ))}
            <CiSquarePlus onClick={handleMoreExperience} className='plus' />
          </div>
          <h1>Acheivements</h1>
          <div className='achievements'>
            {achievmentArray.map((achievements, index) => (
              <div key={index} data-aos="fade-up">
                <input required type="text" placeholder='' value={achievements} onChange={(e) => {
                  const newAcheivements = [...achievmentArray];
                  newAcheivements[index] = e.target.value;
                  setAchievmentArray(newAcheivements);
                }} />
              </div>
            ))}
            <CiSquarePlus onClick={handleMoreScheivements} className='plus' />
          </div>
          <button className='submitbutton' type='submit'><span>Submit</span><GoArrowRight className="forwardArrow" /></button>
        </div>
        
      </div>
      
    </form>
  );
}

export default Form;
