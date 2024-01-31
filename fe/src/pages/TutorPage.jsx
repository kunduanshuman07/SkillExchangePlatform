import { Avatar, Box, Button, Rating, Typography } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import AvatarImg from "../assets/Teacher-one.jpg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HubIcon from '@mui/icons-material/Hub';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import EmailIcon from '@mui/icons-material/Email';
import AdjustIcon from '@mui/icons-material/Adjust';
const TutorPage = () => {
  const [tabState, setTabState] = useState('PersonalInfo');
  return (
    <Root>
      <Box className='container'>
        <Box className='left-container'>
          <Avatar className='avatar' src={AvatarImg} alt='tutor' />
          <Typography className='tutor-name'>Matthew E. McNatt</Typography>
          <Typography className='tutor-prof'>Professor @George Brown College</Typography>
          <Rating value={4} size='small' readOnly className='rating' />
          <Button className='connect' startIcon={<HubIcon />} >Connect</Button>
        </Box>
        <Box className='right-container'>
          <Box className='tab-header'>
            <Button startIcon={<FiberManualRecordIcon />} className='tab-btns' style={{ color: tabState === 'PersonalInfo' ? '#FF7426' : 'white' }} onClick={() => setTabState('PersonalInfo')}>Personal Info</Button>
            <Button startIcon={<FiberManualRecordIcon />} className='tab-btns' style={{ color: tabState === 'Experience' ? '#FF7426' : 'white' }} onClick={() => setTabState('Experience')}>Experience</Button>
            <Button startIcon={<FiberManualRecordIcon />} className='tab-btns' style={{ color: tabState === 'TopSkills' ? '#FF7426' : 'white' }} onClick={() => setTabState('TopSkills')}>Top Skills</Button>
            <Button startIcon={<FiberManualRecordIcon />} className='tab-btns' style={{ color: tabState === 'Reviews' ? '#FF7426' : 'white' }} onClick={() => setTabState('Reviews')}>Reviews</Button>
          </Box>
          {tabState === 'PersonalInfo' &&
            <Box className='personal-info'>
              <Box className='personal-about'>
                <Typography className='personal-about-header'>About</Typography>
                <Typography className='about-text'>Ayesha Bazmi is a results-driven Marketing Manager with a passion for leveraging innovative strategies to drive brand growth and customer engagement in the ever-evolving digital landscape. Feel free to reach me out for any specific queries.</Typography>
              </Box>
              <Box className='social-link'>
                <Typography className='social-link-header'>Social Links</Typography>
                <Box className='icon-btns'>
                  <Button className='icons' startIcon={<EmailIcon />}>abcdefgh@gmail.com</Button>
                  <Button className='icons' startIcon={<LinkedInIcon />}>https://linkedin.com</Button>
                  <Button className='icons' startIcon={<GitHubIcon />}>https://github.com</Button>
                </Box>
              </Box>
            </Box>
          }
          {tabState === 'Experience' &&
            <Box className='experience'>
              <Box className='exp-header'>
                <Button startIcon={<AdjustIcon />} className='exp-title'>Software Developer</Button>
                <Typography className='exp-footer'>@Microsoft | 2020-2023</Typography>
              </Box>
              <Box className='exp-header'>
                <Button startIcon={<AdjustIcon />} className='exp-title'>Software Developer</Button>
                <Typography className='exp-footer'>@Microsoft | 2020-2023</Typography>
              </Box>
              <Box className='exp-header'>
                <Button startIcon={<AdjustIcon />} className='exp-title'>Software Developer</Button>
                <Typography className='exp-footer'>@Microsoft | 2020-2023</Typography>
              </Box>
              <Box className='exp-header'>
                <Button startIcon={<AdjustIcon />} className='exp-title'>Software Developer</Button>
                <Typography className='exp-footer'>@Microsoft | 2020-2023</Typography>
              </Box>
            </Box>
          }
          {tabState === 'TopSkills' &&
            <Box className='skiils'>
              <Typography className='primary-skill-header'>Primary Skills & Frameworks</Typography>
              <Box className='primary-skills'>
                <Button className='skill'>React.js</Button>
                <Button className='skill'>Node.js</Button>
                <Button className='skill'>Express</Button>
                <Button className='skill'>SQL</Button>
              </Box>
              <Typography className='sec-skill-header'>Secondary Skills & Frameworks</Typography>
              <Box className='secondary-skills'>
                <Button className='skill'>Python</Button>
                <Button className='skill'>Django</Button>
                <Button className='skill'>Vue.js</Button>
                <Button className='skill'>C++</Button>
              </Box>
            </Box>
          }
          {tabState === 'Reviews' && 
            <Box className='reviews'>
              <Box className='review-content'>
                <Avatar src={AvatarImg}/>
                <Typography className='review'>Ayesha Bazmi is a results-driven Marketing Manager with a passion for leveraging innovative strategies to drive brand growth and customer engagement in the ever-evolving digital landscape. Feel free to reach me out for any specific queries.</Typography>
              </Box>
              <Box className='review-content'>
                <Avatar src={AvatarImg}/>
                <Typography className='review'>Ayesha Bazmi is a results-driven Marketing Manager with a passion for leveraging innovative strategies to drive brand growth and customer engagement in the ever-evolving digital landscape. Feel free to reach me out for any specific queries.</Typography>
              </Box>
            </Box>
          }
        </Box>
      </Box>
    </Root>
  )
}

const Root = styled.div`
  .container{
    display: flex;
    width: 100%;
  }
  .review{
    color: white;
    margin: auto 20px;
    font-size: 12px;
  }
  .review-content{
    display: flex;
    margin-right: auto;
    background-color: #3D3F54;
    margin-top: 20px;
    border-radius: 20px;
    padding: 20px;
  }
  .reviews{
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
  .skill{
    color: white;
    font-weight: bold;
    text-transform: none;
  }
  .sec-skill-header{
    border-bottom: 1px solid #FF7426;
    width: 210px;
    font-size: 14px;
    color: white;
    margin-top: 20px;
    margin-left: 20px;
  }
  .primary-skill-header{
    border-bottom: 1px solid #FF7426;
    width: 190px;
    font-size: 14px;
    color: white;
    margin-top: 20px;
    margin-left: 20px;
  }
  .secondary-skills{
    background-color: #3D3F54;
    color: white;
    padding: 20px;
    border-radius: 20px;
    margin-top: 20px;
    display: flex;
  }
  .primary-skills{
    background-color: #3D3F54;
    color: white;
    padding: 20px;
    border-radius: 20px;
    margin-top: 20px;
  }
  .skills{
    display: flex;
    flex-direction: column;
  }
  .exp-footer{
    font-size: 10px;
    margin-left: 30px;
    margin-top: -10px;
  }
  .exp-title{
    text-transform: none;
    font-weight: bold;
    color: white;
    font-size: 16px;
  }
  .exp-header{
    margin: 10px auto 20px auto;
  }
  .experience{
    background-color: #3D3F54;
    color: white;
    padding: 0px 20px;
    border-radius: 20px;
    width: 600px;
    margin: auto;
  }
  .icons{
    margin-right: auto;
    color: white;
    padding: 5px 10px;
    text-transform: none;
  }
  .icon-btns{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
  .social-link-header{
    border-bottom: 1px solid #FF7426;
    width: 80px;
    font-size: 14px;
  }
  .social-link{
    background-color: #3D3F54;
    color: white;
    padding: 20px;
    border-radius: 20px;
    margin-top: 20px;
  }
  .about-text{
    font-size: 12px;
    margin-top: 20px;
  }
  .personal-about-header{
    border-bottom: 1px solid #FF7426;
    width: 40px;
    font-size: 14px;
  }
  .personal-about{
    background-color: #3D3F54;
    color: white;
    padding: 20px;
    border-radius: 20px;
  }
  .personal-info{
    padding: 20px;
  }
  .tab-btns{
    text-transform: none;
    margin: 0px 20px;
    color: white;
  }
  .tab-header{
    display: flex;
    margin: 5px auto;
  }
  .right-container{
    width: 70%;
    display: flex;
    flex-direction: column;
    background-color: #252A40;
    border-radius: 20px;
    padding: 10px;
    min-height: 420px;
    max-height: 420px;
  }
  .left-container{
    width: 30%;
    display: flex;
    flex-direction: column;
  }
  .avatar{
    width: 100px;
    height: 100px;
    margin: 0px auto;
  }
  .tutor-name{
    font-size: 16px;
    font-weight: bold;
    text-align:center;
    margin-top: 10px;
  }
  .tutor-prof{
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: #868686;
  }
  .rating{
    margin: 10px auto;
  }
  .linkdin{
    color: white;
  }
  .github{
    color: white;
  }
  .connect{
    background-color: #FF7426;
    color: white;
    font-weight: bold;
    text-transform: none;
    width: 130px;
    border-radius: 20px;
    margin: 10px auto 0px auto;
    &:hover{
      background-color: #8c3a0d;
    }
  }
  
`

export default TutorPage