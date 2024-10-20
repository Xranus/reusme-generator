import React, { useEffect } from 'react'
import Document from './Document'
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';

function Templates({setTemp}) {
    useEffect(() => {
        Aos.init()
      }, [])
    const templatesArray = [
        {
            Name: "Document",
            Image: "src/photos/Document.png"
        },
        {
            Name: "comimng soon",
            Image: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHk2MGV5YmZuMHp0YW1lZW41NHoxNW0xMDNhMmpqOTE5Z2pqa2FkNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iHD88spVFkL7mZakwa/giphy.gif"
        }
    ]
    const navigate = useNavigate()
  return (
    <>
    <h1 style={{textAlign:"center"}}>Select a Template</h1>
    <div className='templates'>
      {
        templatesArray.map((el, index)=>{
           return( <img key={index} src={el.Image} alt={el.Name} onClick={()=>{
            navigate('/form')
            return setTemp(el.Name)
        }} />
        )
        })
      }
    </div>
    </>
    
  )
}

export default Templates
