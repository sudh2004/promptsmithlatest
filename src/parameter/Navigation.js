import React from 'react'
import '../css/Navigation.css'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'




function Navigation() {
  return (
    <div className="nav">
    <input type="checkbox" id="nav-check" />
    <div className="nav-header">
      <div className="nav-title">  
   <Typography variant="h5" component="h5" color="white">
     PromptSmith
   </Typography>
      </div>
    </div>
    <div className="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    
    <div className="nav-links">
      <Link to="/" smooth={true} duration={500} className='navigationLInk'>Home</Link>
      <Link to="about" className='navigationLInk'>About</Link>
      <Link to="service" className='navigationLInk'>Service</Link>
      <NavLink to="/blogs" target="_blank" className='navigationLInk'>Blogs</NavLink>
      <Link to="contact" className='navigationLInk'>ContactUs</Link>
      <NavLink to="/course" target="_blank" className='navigationLInk'>Courses</NavLink>
    <NavLink to="/login"><Button variant="contained" color="success">Login</Button></NavLink>
    <NavLink to="/signup"><Button variant="contained" color="primary">SignUp</Button></NavLink>
    </div>
  </div>
  )
}

export default Navigation
