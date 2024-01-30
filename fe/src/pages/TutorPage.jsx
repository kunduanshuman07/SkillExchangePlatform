import { Avatar, Box, Button, Rating, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const TutorPage = () => {
  const { tutorId } = useParams();
  return (
    <Root>
      <Box className='container'>
        <Box className='left-container'>
          <Avatar className='header-avatar' />
          <Typography className='header-name'>Joseph Stalwart</Typography>
          <Typography className='header-exp'>4+ years of exp</Typography>
          <Rating value={4} readOnly className='header-rating' />
          <Typography className='rating-footer'>4000+ students</Typography>
          <Button className='connect-btn'>Start Connecting</Button>
        </Box>
        <Box className='right-container'>
          <Box className='right-header'>
            <Typography className='right-edu'>Education: <span className='edu'>Harvard University</span></Typography>
            <Typography className='right-emp'>Employment: <span className='emp'>Microsoft</span></Typography>
            <Typography className='right-desg'>Designation: <span className='desg'>Software Developer</span></Typography>
          </Box>
          <Box className='bio-achivement'>
            <Box className='bio-content'>
              <Typography className='right-bio-header'>Bio</Typography>
              <Typography className='right-bio'> A passionate software developer with 4+ years of experience translating ideas into impactful digital solutions. Proficient in Java, Python, and JavaScript, I specialize in crafting robust backend systems, intuitive user interfaces, and optimizing algorithms. Throughout my career, I've successfully delivered high-quality software projects, meeting deadlines and adhering to budgets. I stay at the forefront of industry trends and embrace best practices, ensuring my solutions are cutting-edge, scalable, and sustainable. Excited about the limitless possibilities in software development, I look forward to creating more innovative solutions in the future.</Typography>
            </Box>
            <Box className='achivement-content'>
              <Typography className='achive-header'>Achievements</Typography>
              <Typography className='ach-btns'>Codechef 4 star</Typography>
              <Typography className='ach-btns'>Codechef 4 star</Typography>
              <Typography className='ach-btns'>Codechef 4 star</Typography>
              <Typography className='ach-btns'>Codechef 4 star</Typography>
              <Typography className='certi-header'>Certificates</Typography>
              <Typography className='certi-btns'>Udemy</Typography>
              <Typography className='certi-btns'>Databricks</Typography>
              <Typography className='certi-btns'>Microsoft</Typography>
              <Typography className='certi-btns'>Google</Typography>
            </Box>
          </Box>
          <Box className='skills-container'>
            <Typography className='skill-header'>Primary Skills</Typography>
          </Box>
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
  .left-container{
    display: flex;
    flex-direction:column;
    width: 30%;
    padding: 10px;
    border: 1px solid #d0d7de;
    border-radius: 20px;
    cursor: pointer;
    height: 300px;
  }
  .connect-btn{
    text-transform: none;
    font-weight: bold;
  }
  .header-avatar{
    width: 60px;
    height: 60px;
    background-color: black;
    margin: 20px auto;
  }
  .header-name{
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
  .header-exp{
    text-align: center;
    font-size: 12px;
    color: #656d76;
    font-weight: bold;
  }
  .header-rating{
    margin: 20px auto 5px auto;
  }
  .rating-footer{
    text-align: center;
    font-size: 10px;
    color: #656d76;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .right-container{
    width: 70%;
    margin-left: 10px;
    padding: 10px;
  }
  .right-edu{
    font-size: 16px;
    font-weight: bold;
    color: #656d76;
    text-align: center;
  }
  .edu{
    font-size: 18px;
    font-weight: bold;
    color: black;
  }
  .right-emp{
    font-size: 16px;
    font-weight: bold;
    color: #656d76;
    text-align: center;
  }
  .emp{
    font-size: 18px;
    font-weight: bold;
    color: black;
  }
  .right-header{
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #d0d7de;
    padding-bottom: 10px;
  }
  .right-desg{
    font-size: 16px;
    font-weight: bold;
    color: #656d76;
    text-align: center;
  }
  .desg{
    font-size: 18px;
    font-weight: bold;
    color: black;
  }
  .right-bio-header{
    margin: 10px auto 0px auto;
    font-weight: bold;
    color: white;
    text-align: center;
    background-color: #70045e;
    width: 100px;
    border-radius: 10px;
  }
  .right-bio{
    margin-left: 10px;
    margin-top: 10px;
    font-weight: bold;
    color: #656d76;
    font-size: 12px;
    text-align: center;
  }
  .bio-achivement{
    display: flex;
  }
  .bio-content{
    width: 50%;
    border: 1px solid #d0d7de;
    padding: 10px;
    border-radius: 20px;
    margin-top: 10px;
  }
  .achivement-content{
    width: 50%;
    display: flex;
    flex-direction: column;
    border: 1px solid #d0d7de;
    padding: 10px;
    border-radius: 20px;
    margin-left: 10px;
    margin-top: 10px;
  }
  .achive-header{
    margin: 10px auto 0px auto;
    font-weight: bold;
    color: white;
    text-align: center;
    background-color: #751d05;
    width: 200px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  .certi-header{
    margin: 10px auto 0px auto;
    font-weight: bold;
    color: white;
    text-align: center;
    background-color: #050c75;
    width: 200px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  .ach-btns{
    text-transform: none;
    font-weight: bold;
    text-align: center;
    font-size: 13px;
    color: #656d76;
  }
  .certi-btns{
    text-transform: none;
    font-weight: bold;
    text-align: center;
    font-size: 13px;
    color: #656d76;
  }
`

export default TutorPage