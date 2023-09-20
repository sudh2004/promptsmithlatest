import { Button, Card, TextField, Typography } from '@mui/material'
import React from 'react'

function PromptExpert() {
  return (
    <div className="contact-info">
          <Card className="card-contact-expert">
          <div className="head-center">
          <Typography variant="h2" component="h2" className="content">Connect With Prompt Expert</Typography>
         </div>
          <div className='contact-form-data'>
           <form>
                <TextField className="form-field" sx={{mt:3}} type="text" placeholder='Your Name' multiline={true} required />
                <TextField className="form-field" sx={{mt:3}} type="email" placeholder='Your E-Mail' multiline={true} required/>
                <TextField className="form-field" sx={{mt:3}} type='text' placeholder='Your Phone Number' multiline={true} required/>
                 <br /><br/><label>Schedule a time when we connect with youto make better prompts for your problem</label>  
                <TextField className='form-field' sx={{mt:3}} type="datetime-local"  />
             <TextField className="form-field" sx={{mt:3}} type="text" placeholder="Your Question" multiline={true} rows={5} required/>
             <br />
            <Button variant="contained" color="info" sx={{mt:15}}>Submit</Button>
            </form>
          </div>
          </Card>
      </div>

  )
}

export default PromptExpert
