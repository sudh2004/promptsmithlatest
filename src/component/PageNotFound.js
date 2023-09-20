import React from 'react'
import logo from '../Assests/logo.png'
import { Card, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
function PageNotFound() {
  return (
       <div className='home'>
         <Helmet>
        <title>Page Not Found PromptSmith </title>
        <meta name="Author" content="" />
        <meta name="Description" content=""/>
        <meta name="keyword" content="" />
      </Helmet>
    <Container className='container'>
      <Card className="card"> 
        <figure>
      <img src={logo} alt="logo file" className='logo'/>
      <figcaption>The Bettter Understanding of Ai </figcaption>
      </figure>
     <Typography variant="h4" component="h4">Oops! We are Sorry, This page is not exsist.</Typography>
     <div className='prompt-additonals'>
   <Link to='/' className='links'>Visit Our Home Page</Link> <br/><br/>
   </div>
   </Card>
    </Container>
    </div>
  )
}

export default PageNotFound
