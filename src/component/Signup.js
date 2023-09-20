import { Button, Card, Container, TextField,Typography } from '@mui/material';
import React from 'react';
import '../css/logsignfor.css'
import logo from '../Assests/logo.png'
import '../css/logsignfor.css'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Signup() {
  return (
    <div className='home'>
       <Helmet>
        <title>Signup PromptSmith</title>
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
     <Typography variant="h4" component="h4">Create An Account</Typography>
      <div className='login-data'>
      <form>
        <TextField variant='outlined' placeholder='Enter E - mail' className='textfield-data' sx={{mb:5}}/> <br />
        <TextField variant='outlined' placeholder='Password' type='password' className='textfield-data' sx={{mb:5}} /><br />
        <TextField variant='outlined' placeholder='Confirm Your Password' type='password' className='textfield-data' sx={{mb:3}}  /><br />
         <Button variant='contained' color='primary'  sx={{mt:5}}>Get started </Button>
      </form>
      </div>
   <div className='prompt-additonals'>
   <Link to='/login' className='links' >Login</Link> <br/><br/>
   <Link to='/' className='links' >Home</Link>
   </div>
   </Card>
   </Container>
    </div>
  )
}

export default Signup
