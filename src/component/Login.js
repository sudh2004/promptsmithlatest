import { Button, Card, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';
import logo from '../Assests/logo.png'
import '../css/logsignfor.css'
import {Helmet} from 'react-helmet' 


function Login() {
  return (
    <div className='home'>
      <Helmet>
        <title>Login PromptSmith</title>
        <meta name="Author" content="" />
        <meta name="Description" content=""/>
        <meta name="keyword" content="" />
      </Helmet>
      <Container className="container">
      <Card className="card">
      <figure>
      <img src={logo} alt="logo file" className='logo'/>
      <figcaption>The Bettter Understanding of Ai </figcaption>
      </figure>
     <Typography variant="h4" component="h4">Login Your Account</Typography>
      <div className='login-data'>
      <form>
        <TextField variant='outlined' placeholder='Enter E - mail' className='textfield-data' sx={{mb:7}}/> <br />
        <TextField variant='outlined' placeholder='Password' type='password' className='textfield-data' sx={{mb:2}} /><br />
         <Button variant='contained' color='primary' endIcon={<HourglassEmptyOutlinedIcon />} sx={{mt:5}}>Get started </Button>
      </form>
      </div>
   <div className='prompt-additonals'>
   <Link to='/forgot-password' className='links'>Forget Password</Link> <br/><br/>
   <Link to='/signup' className='links'>Create New Account</Link>
   </div>
      </Card>
   </Container>
    </div>
  )
}

export default Login
