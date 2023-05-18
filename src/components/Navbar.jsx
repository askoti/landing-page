import React from 'react'
import { FaStream, FaGithub } from "react-icons/fa";
import '../styles/Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar' style={{backgroundColor: '#020202'}}>
        <div className="start">
            <i><FaGithub /></i>
            <p>Web-Developer Rewards</p>
        </div>
        <div className="end">
            <i><FaStream/ ></i>
        </div>
    </div>
  )
}

export default Navbar