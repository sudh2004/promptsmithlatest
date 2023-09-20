import React from 'react'
import { Helmet } from 'react-helmet'
import { Button, Card,Container,TextField,Typography } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import '../App.css'
import '../css/editor.css'
import { Link } from 'react-router-dom'
import {Element} from 'react-scroll'
import Navigation from '../parameter/Navigation';
import Footer from '../parameter/Footer';

function LandingPage() {
  return (
    <div>
      <Helmet>
         <title>Welcome PromptSmith</title>
        <meta name="Author" content="" />
        <meta name="Description" content=""/>
        <meta name="keyword" content="" />
      </Helmet>
      <Navigation />
      <div className='data-midcontact'>
        <div>
            <Typography className='data-con1' variant="h3" component="h3">Generate Your Prompt With The Power of AI - Without Writing Any Programming</Typography>
            <Typography className='data-con2' variant="p" component="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatem suscipit amet. Eveniet minima quam autem consequuntur temporibus saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, suscipit.</Typography>
        </div>
        <div className='button-point'>
                <Link to="/editor"><Button variant='contained' color="primary" sx={{ml:2,mb:1}} className='button-data'>Get Started</Button></Link>
                <Link to="/editor"><Button variant='contained' color="error" className='button-data'sx={{ml:2 ,mb:1}}>Download Extension</Button></Link>
        </div>
    </div>

      <div className='what-prompt'>
        <div className='section'>
       <Element name="about">
          <Typography variant="h2" component="h2" >What is</Typography>
       </Element>
          <Typography variant="h2" component="h2" color="primary" sx={{ ml: 2, mb: 2 }}>PromptSmith</Typography>
        </div>
        <Typography variant="p" component="p" className='prompt-p'>An AI prompt generator is a tool that uses natural language processing and machine learning algorithms to generate prompts for AI tools like ChatGPT developed by OpenAI. A prompt is simply a starting point or an idea that helps kickstart your project. It can be a word, a phrase, or a question that inspires you to create something unique with the help of artificial intelligence.</Typography>
        <Typography variant="p" component="p" className='prompt-p'>The AI prompt generator can create prompts based on different criteria, such as type of the project, genre, tone, style, length, or even specific keywords or concepts. For example, if you’re working on a business project and need to generate some marketing copy, you could input your target audience, product features, and desired tone into the AI prompt generator.</Typography>
      </div>
      <div className='what-prompt'>
        <div className='section'>
          <Typography variant="h2" component="h2" >Why Use</Typography>
          <Typography variant="h2" component="h2" color="primary" sx={{ ml: 2, mb: 2 }}>PromptSmith</Typography>
        </div>
        <Typography variant="p" component="p" className='prompt-p'>The purpose of a Prompt Personality is to guide future AIs in emulating a writing style. Your output can therefore include highly specific and scientific language, emojis, shorthand, and concepts that only linguistics and writing specialists and AIs would understand.</Typography>
        <Typography variant="p" component="p" className='prompt-p'>A digital writing style fingerprint consisting of lexical, syntatic, structure, and idiosyncratic features. A writeprint includes a description of the tone, register, style, and attitude of a written text. It may factor in use of creativity, humor, and use of figurative language. It may evaluate perplexity and burstiness.</Typography>
        <div className='prompt-points'>
          <ul>
            <li className='prompt-point'>An Action to take</li>
            <li className='prompt-point'>Steps to perform the action</li>
            <li className='prompt-point'>A Persona to emulate</li>
            <li className='prompt-point'>Examples of inputs and/or outputs</li>
            <li className='prompt-point'>Context about the action and situation</li>
            <li className='prompt-point'>Constraints and what not to do</li>
            <li className='prompt-point'>A Template or desired format for the output </li>
            <li className='prompt-point'>Name your AI and evoke its name in the instructions</li>
            <li className='prompt-point'>Give me three options. If I choose a number, expand on that option</li>
          </ul>
        </div>
      </div>

<div className="box-element">
{/* services we offer to the people  start*/}
  <div className="head-center">
    <Element name="service">
       <Typography variant="h2" component="h2">Services We Provide You</Typography>
    </Element>
    </div>
     <div className="boxes">
      <div className="box-row">
        <Card className="box">
        <Link to="/services/ai/" className='hyper-code'><Typography variant="h6" component="h6" >Artificial Intelligence</Typography></Link>
         <Typography variant="p" component="p" className='para-card'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo obcaecati vitae magni ab dolorem expedita!</Typography>        
        </Card>
        <Card className="box">
        <Link to="/services/iot" className='hyper-code'>
          <Typography variant="h6" component="h6">Internet of Thing</Typography></Link>
         <Typography variant="p" component="p" className='para-card'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo obcaecati vitae magni ab dolorem expedita!</Typography>        
        </Card>
        <Card className="box">
        <Link to="/promptengineering/" className="hyper-code">
        <Typography variant="h6" component="h6">Prompt Engineering</Typography>
        </Link>
         <Typography variant="p" component="p" className='para-card'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo obcaecati vitae magni ab dolorem expedita!</Typography>        
        </Card>
        <Card className="box">
      <Link to="/services/uiux/" className="hyper-code">
      <Typography variant="h6" component="h6">UI/UX</Typography>
      </Link>
         <Typography variant="p" component="p" className='para-card'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo obcaecati vitae magni ab dolorem expedita!</Typography>        
        </Card>
      </div>
      <div className="box-row">
      <Card className="box">
        <Link to="/services/webdevelopment/" className="hyper-code">
        <Typography variant="h6" component="h6">Web Development</Typography>
        </Link>
         <Typography variant="p" component="p" className='para-card'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo obcaecati vitae magni ab dolorem expedita!</Typography>        
      </Card>
      <Card className="box">
        <Link to="/services/appdevelopment/" className="hyper-code"> <Typography variant="h6" component="h6">App Development</Typography></Link>
         <Typography variant="p" component="p" className='para-card'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo obcaecati vitae magni ab dolorem expedita!</Typography>        
      </Card>
      <Card className="box">
      <Link to="/services/digitalmarketing/" className="hyper-code">
      <Typography variant="h6" component="h6">Digital Marketing</Typography>
      </Link>
         <Typography variant="p" component="p" className='para-card'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo obcaecati vitae magni ab dolorem expedita!</Typography>        
      </Card>
      <Card className="box">
         <Link to="/services/softwaredevelopment/" className="hyper-code">
         <Typography variant="h6" component="h6">Software Development</Typography>
         </Link>
         <Typography variant="p" component="p" className='para-card'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo obcaecati vitae magni ab dolorem expedita!</Typography>        
      </Card>
      </div>
     </div>
     {/* services we offer to the people finish */}


     {/* industries we offer to the people start */}
    <div className="head-center">
       <Typography variant="h2" component="h2">Industries We Work for you</Typography>
    </div>
     <div className="boxes">
      <div className="box-row">
        <Card className="box">
        <Link to="/industries/healthcare/" className='hyper-code'><Typography variant="h6" component="h6" >Health Care</Typography></Link>
         <Typography variant="p" component="p" className='para-card'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo obcaecati vitae magni ab dolorem expedita!</Typography>        
        </Card>
        <Card className="box">
        <Link to="/industries/education/" className='hyper-code'>
          <Typography variant="h6" component="h6">Education</Typography></Link>
         <Typography variant="p" component="p" className='para-card'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo obcaecati vitae magni ab dolorem expedita!</Typography>        
        </Card>
        <Card className="box">
        <Link to="/industries/ecommerce/" className="hyper-code">
        <Typography variant="h6" component="h6">E-Commerce</Typography>
        </Link>
         <Typography variant="p" component="p" className='para-card'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo obcaecati vitae magni ab dolorem expedita!</Typography>        
        </Card>
        <Card className="box">
      <Link to="/industries/travel/" className="hyper-code">
      <Typography variant="h6" component="h6">Travel</Typography>
      </Link>
         <Typography variant="p" component="p" className='para-card'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo obcaecati vitae magni ab dolorem expedita!</Typography>        
        </Card>
      </div>
      <div className="box-row">
      <Card className="box">
        <Link to="/industries/realestate/" className="hyper-code">
        <Typography variant="h6" component="h6">Real State</Typography>
        </Link>
         <Typography variant="p" component="p" className='para-card'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo obcaecati vitae magni ab dolorem expedita!</Typography>        
      </Card>
      <Card className="box">
        <Link to="/services/appdevelopment/" className="hyper-code"> <Typography variant="h6" component="h6">Finance</Typography></Link>
         <Typography variant="p" component="p" className='para-card'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo obcaecati vitae magni ab dolorem expedita!</Typography>        
      </Card>
      <Card className="box">
      <Link to="/services/digitalmarketing/" className="hyper-code">
      <Typography variant="h6" component="h6">Marketing</Typography>
      </Link>
         <Typography variant="p" component="p" className='para-card'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo obcaecati vitae magni ab dolorem expedita!</Typography>        
      </Card>
      <Card className="box">
         <Link to="/industries/softwaredevelopment/" className="hyper-code">
         <Typography variant="h6" component="h6">Software Development</Typography>
         </Link>
         <Typography variant="p" component="p" className='para-card'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo obcaecati vitae magni ab dolorem expedita!</Typography>        
      </Card>
      </div>
     </div>
      {/* industries we offer to the people finish */}
      </div>


      <div className="contact-info">
        <Container>
          <Card className="card-contact">
          <div className="head-center">
            <Element name="contact"><Typography variant="h2" component="h2" className="content">Contact Us</Typography></Element>
         </div>
          <div className='flex-contact'>
          <div className='contact-form'>
           <form>
                <TextField className="form-field" sx={{mt:3}} type="text" placeholder='Your Name' multiline={true} required />
                <TextField className="form-field" sx={{mt:3}} type="email" placeholder='Your E-Mail' multiline={true} required/>
                <TextField className="form-field" sx={{mt:3}} type='text' placeholder='Your Phone Number' multiline={true} required/>
                <TextField className="form-field" sx={{mt:3}} type="text" placeholder="Your Query" multiline={true} rows={5} required/>
             <br />
            <Button variant="contained" color="info" sx={{mt:15}}>ContactUs</Button>
            </form>
           </div>

         <div className='contact-number'>
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
          </Card>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage
