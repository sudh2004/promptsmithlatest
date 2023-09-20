import { Button, TextField, Typography } from '@mui/material'
import '../css/join.css'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Configuration, OpenAIApi } from 'openai';

function JoinPage() {

  const llm = ['Chatgpt', 'Midjourney','Google Bard','Stable Diffusion'] 
  const content = ['BLOG','POLICY','NEWSLETTER','PROPOSAL','RESUME','SCRIPT','CASESTUDY','PRESSRELEASE','ADCOPY','DOCUMENT','PROFILE']
  const theam = ['NEUTRAL','PLAYFULL','EMPATHETIC','CRITICLE','URGENT','DRAMA','INSPERATIONAL','FUNNY','HUMOROUS','POETIC','AUTHORITATIVE']
  const [llms, setllms] = useState('')
  const [texts,settexts]= useState('')
  const [contents,setcontents]=useState('')
  const [theams,settheams]=useState('')
  
  const changingvalue1 = (event) => {
    setllms(event.target.value)
  }
  const changingvalue2 = (event) => {
    setcontents(event.target.value)
  }
  const changingvalue3 = (event) => {
    settheams(event.target.value)
  }

  const changingvalue4 = (event) =>{
    settexts(event.target.value)
  }

  
  /* opening the prompts */
  const handler = async () => {
    const configuration = new Configuration({
      apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);
    console.log("clicked")
    try {
      const completion1 = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: llms + 'are very trainfull Large Language model. they generate best ai content. Generate a Prompt for' + { texts } + ' , the theam of the prompt ' + theams + 'and the content of prompt is the' + contents,
        max_tokens: 200,
      });
      const completion2 = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: llms + 'are very trainfull Large Language model. they generate best ai content. Generate a Prompt for' + { texts } + ' , the theam of the prompt ' + theams + 'and the content of prompt is the' + contents,
        max_tokens: 200,
      });
      const completion3 = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: llms + 'are very trainfull Large Language model. they generate best ai content. Generate a Prompt for' + { texts } + ' , the theam of the prompt ' + theams + 'and the content of prompt is the' + contents,
        max_tokens: 200,
      });
      const completion4 = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: llms + 'are very trainfull Large Language model. they generate best ai content. Generate a Prompt for' + { texts } + ' , the theam of the prompt ' + theams + 'and the content of prompt is the' + contents,
        max_tokens: 200,
      });
      const completion5 = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: llms + 'are very trainfull Large Language model. they generate best ai content. Generate a Prompt for' + { texts } + ' , the theam of the prompt ' + theams + 'and the content of prompt is the' + contents,
        max_tokens: 200,
      });

      document.getElementById('dataanswer1').innerHTML = completion1.data.choices[0].text;
      document.getElementById('dataanswer2').innerHTML = completion2.data.choices[0].text;
      document.getElementById('dataanswer3').innerHTML = completion3.data.choices[0].text;
      document.getElementById('dataanswer4').innerHTML = completion4.data.choices[0].text;
      document.getElementById('dataanswer5').innerHTML = completion5.data.choices[0].text;
      document.getElementById('prompt').innerHTML = texts


    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  }


  return (
    <>
      <div className="chats">

   {/* this is the div for the chatting part start */}
            <div className="chatting">
               <div className="message-answer">
               <Typography variant="h3" component="h3" id="prompt">Why Ai tools are very friendly to the human</Typography>
               <Typography variant="p" component="p" id="dataanswer1">The AI will be very firendly beacouse they understand the human</Typography>
               <Typography variant="p" component="p" id="dataanswer2">The AI will be very firendly beacouse they understand the human</Typography>
               <Typography variant="p" component="p" id="dataanswer3">The AI will be very firendly beacouse they understand the human</Typography>
               <Typography variant="p" component="p" id="dataanswer4">The AI will be very firendly beacouse they understand the human</Typography>
               <Typography variant="p" component="p" id="dataanswer5">The AI will be very firendly beacouse they understand the human</Typography>
               </div>
{/* this is selecting the all llm theam and content start */}

            <div className="all-content">
        {/* this for selecting the theam content and llm start*/}
             <div className="contents">     

         {/* this for selecting  llm start*/}
        <div className='prompt-data-field-contents'>
          <Typography variant='p' component="p" >
            LLM
          </Typography>
          <select className='select-contents' value={llms} onChange={changingvalue1} >
            {
              llm.map((llm) => <option className='options-contents' value={llm} >{llm}</option>)
            }
          </select>
        </div>
        {/* this for selecting  llm finish*/}

         {/* this for selecting the content start*/}
        <div className='prompt-data-field-contents'>
          <Typography variant='p' component="p"  >
            Content
          </Typography>
          <select className='select-contents' value={contents} onChange={changingvalue2}>
            {
              content.map((content) => <option className='options-contents' value={content}>{content}</option>)
            }
          </select>
        </div>
         {/* this for selecting the content finish*/}

         {/* this for selecting the theam start*/}
        <div className='prompt-data-field-contents'>
          <Typography variant='p' component="p"  >
            Theam
          </Typography>
          <select className='select-contents' value={theams} onChange={changingvalue3}>
            {
              theam.map((theam) => <option className='option-contentss' value={theam}>{theam}</option>)
            }
          </select>
        </div>
           {/* this for selecting the theam finish*/}
        </div>
        {/* this for selecting the theam content and llm finish*/}
               
        
        {/* this is for taking input by user start */}
        <div className='prompt-data-field-contents'>
        {/* this is for taking input by user start */}
        <div>
          <Typography variant='h6' className='headings-contents'>
            Input
          </Typography>
         <div className='flex-data-contents'>
         <TextField placeholder='Prompt Input' className='prompt-text-contents' multiline={true} value={texts} onChange={changingvalue4} /><br />
         <Button variant="contained" color="primary" onClick={()=>handler()}><SendIcon /></Button>
         </div>
          <Typography variant='p' className='p'>
            Input that Assist AI to give best prompts
          </Typography>
        </div>
        {/* this is for taking input by user finish */}
               </div>


        {/* this is selecting the all llm theam and content finish */}
         </div>
    
        {/* this is the div for the chatting part finish */}
            </div>  

        {/* the boxs are representing here chats and generating prompts flex the content finish */}
        </div>
     </>    
  )
}

export default JoinPage
