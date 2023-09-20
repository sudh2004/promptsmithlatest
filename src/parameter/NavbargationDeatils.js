import React from 'react'
import '../css/Navigation.css'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function NavbargationDeatils() {
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
      <Link to="/" className='navigationLInk'>Home</Link> 
      <Link to="/blogs" target="_blank" className='navigationLInk'>Blogs</Link>
      <Link to="/course" target="_blank" className='navigationLInk'>Courses</Link>
    <Link to="/login"><Button variant="contained" color="success">Login</Button></Link>
    <Link to="/signup"><Button variant="contained" color="primary">SignUp</Button></Link>
    </div>
  </div>

  )
}

export default NavbargationDeatils
