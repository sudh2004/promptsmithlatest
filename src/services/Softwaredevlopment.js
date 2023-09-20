import { Typography } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet'
import Aiimg from '../Assests/Ai.jpg'
import '../css/services.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Softwaredevlopment() {
  return (
    <div>
       <Helmet>
        <title>Software Developmet || PromptSmith</title>
        <meta name="Author" content="" />
        <meta name="Description" content=""/>
        <meta name="keyword" content="" />
      </Helmet>
     
      {/* the services start */}
      <div className='Services'>

        {/* the service content start */}
        <div className='section-content'>

          {/* heading of the service start */}
        <div className='section sec'>
            <Typography variant="h2" component="h2" > Software </Typography>
            <Typography variant="h2" component="h2" color="primary"  sx={{ml:2}}>Development</Typography>
        </div>
          {/* heading of the service finish */}

          {/* content of heading start */}
        <div className='conti'>
         <Typography variant="p" component="p"> AI, or Software Development, refers to machines that can perform tasks similarly to human.</Typography>
        </div>
        {/* content of heading start */}

        {/* All checkbox and data start */}
        <div className='section-inline'>

              {/* checkbox and the content1 start */}
                <div className='section-inline-content'>
                  <CheckCircleIcon variant="contained" color="primary" fontSize='large' />
                  <Typography variant="p" component="p" className='content-section'>
                    AI can perform tasks that are usually performed by humans, such as recognizing objects and faces in
                  </Typography>
                </div>
                  {/* service data construct1 finish */}

                    {/* service data construct2 start */}
                <div className='section-inline-content'>
                  <CheckCircleIcon variant="contained" color="primary" fontSize='large' />
                  <Typography variant="p" component="p" className='content-section'>
                    AI can perform tasks that are usually performed by humans, such as recognizing objects and faces in
                  </Typography>
                </div> 
                  {/* service data construct2 finish */}
  
              {/* service data construct3 start */}
                <div className='section-inline-content'>
                  <CheckCircleIcon variant="contained" color="primary" fontSize='large' />
                  <Typography variant="p" component="p" className='content-section'>
                    AI can perform tasks that are usually performed by humans, such as recognizing objects and faces in
                  </Typography>
                </div>
                  {/* service data construct3 finish */}

                    {/* service data construct4 start */}
                <div className='section-inline-content'>
                  <CheckCircleIcon variant="contained" color="primary" fontSize='large' />
                  <Typography variant="p" component="p" className='content-section'>
                    AI can perform tasks that are usually performed by humans, such as recognizing objects and faces in
                  </Typography>
                </div> 
                  {/* service data construct4 finish */}
  
                  {/* service data construct5 start */}
                <div className='section-inline-content'>
                  <CheckCircleIcon variant="contained" color="primary" fontSize='large' />
                  <Typography variant="p" component="p" className='content-section'>
                    AI can perform tasks that are usually performed by humans, such as recognizing objects and faces in
                  </Typography>
                </div>
                {/* service data construct5 finish */}

                  {/* service data construct6 start */}
                <div className='section-inline-content'>
                  <CheckCircleIcon  variant="contained" color="primary" fontSize='large'/>
                  <Typography variant="p" component="p" className='content-section'>
                    AI can perform tasks that are usually performed by humans, such as recognizing objects and faces in
                  </Typography>
                </div> 
                  {/* service data construct6 finish */}
        </div>
        {/* All checkbox and data finish */}

          {/* additional information about the service start */}
        <div>
          <Typography variant='p' component="p" className='content-dataset-services'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nobis a molestiae modi eaque, nisi, iusto cupiditate veniam voluptate temporibus hic, illum qui sit ut tenetur? Dolore ullam, corrupti voluptatum illum ducimus impedit omnis a numquam harum, esse consequuntur, nesciunt atque. A, aut dolor. Maxime consectetur dignissimos corporis ducimus autem.
          </Typography>
        </div>
        {/* additional information about the service finish */}
        </div>
         {/* the service content finish */}

         {/* service data construct with image start*/}

        <div className='service-content'>

          {/* this is the first container start */}
          <div className='service-data'>
            <img src={Aiimg} alt="Ai file" className='images'/>
            <div className='service-rows-data'>
              <Typography variant="h3" component="h3"sx={{color:"blue"}}>
                Software Development
              </Typography>
            <Typography variant="p" component="p" className='para-service1'>
             Businesses are continuously challenged to do more with less — and content is a great way to drive brand awareness and acquire leads. However, scaling a business’ content output without using more resources is nearly impossible.
            </Typography>  
            <Typography variant="p" component="p" className='para-service1'>
          With HubSpot’s free AI writer, businesses can generate copy for many programs and channels in no time. Enter a prompt or topic and watch HubSpot's content assistant tools generate a first draft for your next prospecting email, landing page, social caption, or blog post.
          </Typography>
            </div>
          </div>
          {/* this is the first container finsih */}

           {/* this is the second container start */}
          <div className='service-data'> 
          <div className='service-rows-data'>
              <Typography variant="h3" component="h3" sx={{color:"blue"}}>
                Software Development
              </Typography>
          <Typography variant="p" component="p" className='para-service2'>
         Businesses are continuously challenged to do more with less — and content is a great way to drive brand awareness and acquire leads. However, scaling a business’ content output without using more resources is nearly impossible.
          </Typography> 
          <Typography variant="p" component="p" className='para-service2'>
          With HubSpot’s free AI writer, businesses can generate copy for many programs and channels in no time. Enter a prompt or topic and watch HubSpot's content assistant tools generate a first draft for your next prospecting email, landing page, social caption, or blog post.
          </Typography>
          </div>
          <img src={Aiimg} alt="Ai file" className='images' />
          </div>
            {/* this is the second container finish */}

             {/* this is the third container start */}
          <div className='service-data'>
          <img src={Aiimg} alt="Ai file" className='images' />
          <div className='service-rows-data'>
              <Typography variant="h3" component="h3" sx={{color:"blue"}}>
                Software Development
              </Typography>
          <Typography variant="p" component="p" className='para-service1'>   
           Businesses are continuously challenged to do more with less — and content is a great way to drive brand awareness and acquire leads. However, scaling a business’ content output without using more resources is nearly impossible.
            </Typography>
            <Typography variant="p" component="p" className='para-service1'>
          With HubSpot’s free AI writer, businesses can generate copy for many programs and channels in no time. Enter a prompt or topic and watch HubSpot's content assistant tools generate a first draft for your next prospecting email, landing page, social caption, or blog post.
          </Typography>
          </div>
          </div>
           {/* this is the third container finish */}


             {/* this is the forth container start */}
          <div className='service-data'>
          <div className='service-rows-data'>
              <Typography variant="h3" component="h3" sx={{color:"blue"}}>
                Software Development
              </Typography>
          <Typography variant="p" component="p" className='para-service2'>
         Businesses are continuously challenged to do more with less — and content is a great way to drive brand awareness and acquire leads. However, scaling a business’ content output without using more resources is nearly impossible.
          </Typography>
          <Typography variant="p" component="p" className='para-service2'>
          With HubSpot’s free AI writer, businesses can generate copy for many programs and channels in no time. Enter a prompt or topic and watch HubSpot's content assistant tools generate a first draft for your next prospecting email, landing page, social caption, or blog post.
          </Typography>
        </div>
          <img src={Aiimg} alt="Ai file" className='images'/>
          </div>
        {/* this is the forth container finish*/}
        </div>
          {/* service data construct with image finish */}

          {/* the boxes start */}
          <div className='datafield-ai'>
            <div>
                <Typography variant='p' component="p" className='datafield'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quisquam facere dolorem, deleniti animi non itaque dicta culpa dolores eum magnam eveniet nulla quia nostrum amet at, eos numquam delectus veniam quasi iusto eaque reiciendis? Corporis modi, ratione autem harum repellat illo nisi facere! Quisquam ea doloremque fuga ipsam placeat! Aliquid officia distinctio fugit, eum nisi, architecto nam dolorem a qui commodi perferendis. Doloremque, laboriosam accusamus sapiente illum consequuntur, saepe libero necessitatibus cumque placeat cum aperiam optio? Dolorum error dolore et pariatur ab illo doloremque tempore est libero. Quo, ex. Vero magnam cumque reprehenderit officia porro corrupti nulla minima illum delectus. Soluta, possimus. Sapiente recusandae ab ratione eius ipsum fuga, veniam nihil vel delectus. Eveniet obcaecati autem quasi laboriosam nemo recusandae blanditiis praesentium et, neque minus, reprehenderit est libero voluptas cum corrupti repellendus doloribus. Dignissimos placeat, nisi illo nihil aspernatur repellat architecto, necessitatibus itaque quisquam, officia laborum. Reiciendis similique quis fuga aliquid nam, error, officia corrupti nostrum ad iste laudantium labore dolores tenetur totam voluptatum. Pariatur itaque, saepe minus numquam animi reiciendis ullam consequatur amet ratione, ducimus labore magni! Reprehenderit tenetur deleniti tempore aspernatur consequuntur iste obcaecati quia, debitis iure dolore nostrum ipsam eius error mollitia, at nemo? Neque, reprehenderit.</Typography>
            </div>
            <div className='datafields'>
              <Typography variant='p' component="p" className='datafield'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deleniti commodi sequi dignissimos optio laudantium accusamus consequuntur unde maxime ex. Similique consectetur animi aspernatur aut voluptatem ipsa velit. Reiciendis quia harum dolor dicta nisi voluptatibus magni unde provident voluptas necessitatibus, excepturi ducimus ullam! Est blanditiis molestiae ipsam odit. Natus, tenetur odio voluptatibus placeat quos accusantium nostrum eligendi ex praesentium officia delectus illo fugiat, consequuntur quae dolore dignissimos quam? Doloremque amet facere delectus quidem totam error non, illo sequi exercitationem adipisci, vero minus accusantium velit reprehenderit officia architecto veritatis voluptas excepturi. Ab alias ea aliquam illo quibusdam sit accusamus, doloremque fuga dolorum voluptate expedita placeat dignissimos sequi, obcaecati quod nobis nostrum dolores sed? Obcaecati, facilis! Corrupti animi quod, voluptas voluptatum quisquam voluptate odio quasi reprehenderit. Obcaecati, facilis corrupti nesciunt ullam iusto molestias totam quasi, dignissimos, sed architecto debitis blanditiis nisi nostrum! Quaerat praesentium a consequatur minus corporis. Laudantium nam fugiat nobis quo eligendi quibusdam, in rerum magni illo, ipsam sint et debitis perspiciatis asperiores consequuntur voluptates dolorem soluta adipisci veniam eveniet quam, illum tempora explicabo ratione! A reprehenderit reiciendis aliquid vel voluptas perspiciatis quo quod, debitis numquam ea recusandae molestias fuga facilis provident harum officia tempora. Vitae minima qui quisquam amet.</Typography>
            </div>
          </div>
          {/* the boxes finish */}
      </div>
      {/* the services  finish */}

    </div>
  )
}

export default Softwaredevlopment
