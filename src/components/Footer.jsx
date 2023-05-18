import React from 'react'
import '../styles/Footer.css'
import { socailMedia } from '../assets/data'

const Footer = () => {
  return (
    <div className="classname">
        <h1>&copy; 2023 My Landing Page. All Rights Reserved. </h1>
    <div className='footer'>
        {socailMedia.map(({name, url, icon, hex}) => (
            <div className='social-media'>
                <i className='sm-icon'>{icon}</i>
                <a href={url} className='sm-a' target="_blank" rel="noopener noreferrer" >{name}</a>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Footer