import React from 'react'
import {Typography} from '@mui/material'

import '../css/editor.css'
import { Link } from 'react-router-dom'
import PhoneIcon from '@mui/icons-material/Phone';

function Footer() {
  return (
    <div className='datasets'>
      
<div className='footer'>
      <div className='footer-prompt'>
      <Typography variant="h6" component="h6" className="footer-name">SERVICES</Typography>
        <Link to="/services/ai/" className='links-footer'>AI Developemt</Link>
        <Link to="/services/iot/" className='links-footer'>IOT Development</Link>
        <Link to="/services/webdevelopment/" className='links-footer'>Web Development</Link>
        <Link to="/services/appdevelopment/" className='links-footer'>App Development</Link>
        <Link to="/services/erpdevelopment/" className='links-footer'>ERP Developemt</Link>
        <Link to="/services/uiux/" className='links-footer'>UI/UX Design</Link>
        <Link to="/services/softwaredevelopment/" className='links-footer'>Software Development</Link>
        <Link to="/services/digitalmarketing/" className='links-footer'>Digital Marketing</Link>
      </div>
      <div className='footer-prompt'>
        <Typography variant="h6" component="h6" className="footer-name">PROMPT SMITH</Typography>
        <Link to="/about" className='links-footer'>About</Link>
        <Link to="/" className='links-footer'>Blogs</Link>
        <Link to="/teams" className='links-footer'>Teams</Link>
        <Link to="/contact" className='links-footer'>Contact</Link>
        <Link to="/clients" className='links-footer'>Clients</Link>
        <Link to="/careers" className='links-footer'>Careers</Link>
        <Link to="/privacypolicy" className='links-footer'>Privacy Policy</Link>
      </div>
      <div className='footer-prompt'>
      <Typography variant="h6" component="h6" className="footer-name">INDUSTRIES</Typography>
        <Link to="/industries/softwaredevelopment/" className='links-footer'>Software Development</Link>
        <Link to="/industries/healthcare/" className='links-footer'>HealthCare</Link>
        <Link to="/industries/education/" className='links-footer'>Education</Link>
        <Link to="/industries/ecommerce/" className='links-footer'>E-Commerce</Link>
        <Link to="/industries/travel/" className='links-footer'>Travel</Link>
        <Link to="/industries/realestate/" className='links-footer'>Real Estate</Link>
      </div>
      <div className='footer-prompt'>
      <Typography variant="h6" component="h6" className="footer-name">CONTACT</Typography>
        <Link to="https://mail.google.com/mail/u/0/#inbox?compose=info@promptsmith.co" target="_blank" className='links-footer'>info@promptsmith.co</Link>
       <div className='footer-info'>
       <PhoneIcon  variant="outlined" color="primary" sx={{mt:2}} />
        <Link to="tel://8826559303" className='links-footer'>+91 8826559303</Link>
       </div>
       <div className='footer-info'>
        <PhoneIcon  variant="outlined" color="primary" sx={{mt:2}} />
        <Link to="/" className='links-footer'>+91 8826023527</Link>
        </div>
      </div>
</div>

    </div>
  )
}

export default Footer
