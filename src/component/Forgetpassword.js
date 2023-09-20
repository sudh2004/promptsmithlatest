import { Button, Card, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import logo from '../Assests/logo.png'
import { Link } from 'react-router-dom'
import '../css/logsignfor.css'
import { Helmet } from 'react-helmet'
function Forgetpassword() {
  return (
    <div className='home'>
       <Helmet>
        <title>Forget Password || PromptSmith</title>
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
  <Typography variant="h4" component="h4">Forget Password</Typography>
  <div className='login-data'>
      <form>
        <TextField variant='outlined' placeholder='Enter E - mail' className='textfield-data' sx={{mb:7}}/> <br />
         <Button variant='contained' color='primary'>Forget Password</Button>
      </form>
      </div>
      <div className='prompt-additonals'>
  <Link to='/login' className='links' >Login </Link> <br />  <br/>
  <Link to='/signup-data' className='links' >Create Account </Link>
  </div>
  </Card>
  </Container>
</div>
  )
}

export default Forgetpassword
