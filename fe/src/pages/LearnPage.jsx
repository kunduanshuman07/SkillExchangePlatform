import { Avatar, Box, Button, Rating, Typography } from '@mui/material';
import React, { useState } from 'react'
import PrefDialog from '../components/PrefDialog';
import styled from 'styled-components';
const LearnPage = () => {
  const [prefDialog, setPrefDialog] = useState(true);
  return (
    <Root>
      {prefDialog && <PrefDialog setPrefDialog={setPrefDialog} />}
      <Box className='container'>
        <Box className='learning-tile'>
          <Box className='tutor-header'>
            <Avatar className='avatar' />
            <Box className='tutor'>
              <Typography className='tutor-name'>Joseph Stalwart</Typography>
              <Typography className='tutor-exp'>4+ years of exp</Typography>
            </Box>
            <Button className='free-paid-btn'>Free</Button>
            <Box className='rating-info'>
              <Rating className='rating' readOnly value={4} size='small' />
              <Typography className='rating-text'>4000+ students</Typography>
            </Box>
          </Box>
          <Box className='tutor-desc'>
            <Typography className='tutor-ed'>Education: <span className='tutor-ed-text'>Master's in Computer Science</span></Typography>
            <Box className='subjects'>
              <Typography className='subject-sp'>Subject Speciality: </Typography>
              <Button className='sub-btn'>React.js</Button>
              <Button className='sub-btn'>Node.js</Button>
            </Box>
            <Typography className='tutor-emp'>Current Employment: <span className='tutor-emp-text'>Microsoft</span></Typography>
          </Box>
          <Button className='connect-btn'>Connect</Button>
        </Box>
      </Box>
    </Root>
  )
}

const Root = styled.div`
  .container{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .learning-tile{
    background: var(--light-grad-pink-blue, radial-gradient(ellipse at 40% 0%, #bf398910 0, transparent 75%), radial-gradient(ellipse at 60% 0%, #096bde10 0, transparent 75%));
    border: 2px solid #d0d7de;
    border-radius: 10px; 
    width: 50%;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
  .avatar{
    background-color: black;
    margin-left: 20px;
  }
  .tutor{
    display: flex;
    flex-direction: column;
  }
  .tutor-header{
    display: flex;
    padding: 10px 0px;
    border-bottom: 2px solid #d0d7de;
  }
  .tutor-name{
    margin-left: 20px;
    font-size: 16px;
    font-weight: bold;
  }
  .tutor-exp{
    margin: 0px auto;
    font-size: 10px;
    color: #656d76;
    font-weight: bold;
  }
  .free-paid-btn{
    background-color: #1f883d;
    color: white;
    height: 30px;
    margin: auto;
    text-transform: none;
    &:hover{
      background-color: #1f883d;
    color: white;
    }
  }
  .rating-info{
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: 20px;
  }
  .rating{

  }
  .rating-text{
    font-size: 10px;
    color: #656d76;
    margin: auto;
    font-weight: bold;
  }
  .tutor-desc{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  .tutor-ed{
    font-size: 16px;
    font-weight: bold;
    color: #656d76;
  }
  .tutor-ed-text{
    font-size: 18px;
    color: black;
  }
  .subjects{
    display: flex;
    margin-top: 20px;
  }
  .subject-sp{
    font-size: 16px;
    font-weight: bold;
    color: #656d76;
  }
  .sub-btn{
    background-color: black;
    color: white;
    border-radius: 10px;
    text-transform: none;
    height: 25px;
    margin-left: 10px;
    font-size: 10px;
    font-weight: bold;
    &:hover{
      background-color: black;
    color: white;
    }
  }
  .tutor-emp{
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
    color: #656d76;
  }
  .tutor-emp-text{
    font-size: 18px;
    color: black;
  }
  .connect-btn{
    background-color: #0969da;
    color: white;
    text-transform: none;
    font-size: 15px;
    padding: 3px 15px;
    border-radius: 5px;
    &:hover{
      background-color: #0969da;
      color: white;
    }
    font-weight: bold;
    margin: 20px 20px 10px auto;
  }
`

export default LearnPage

