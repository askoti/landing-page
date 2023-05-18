import React, { useEffect } from 'react'
import photo from '../assets/exp.jpg'
import '../styles/ThirdPage.css'
import Aos from "aos";
import 'aos/dist/aos.css'


const ThirdPage = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <div className='class'>
        <div className="myimage">
            <img src={photo} alt="" className='photo' width={'60%'} />
        </div>
        <div className="the-content">
            <h1 className="title" data-aos='fade-down'>Transforming</h1>
            <h1 className="title" data-aos='fade-down'>your ideas into</h1>
            <h1 className="title" data-aos='fade-down'></h1>
            <h1 className="title" data-aos='fade-down'>digital reality</h1>
        </div>
    </div>
  )
}

export default ThirdPage