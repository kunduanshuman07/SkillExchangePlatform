import { Avatar, Box, Button, LinearProgress, Rating, Typography } from '@mui/material';
import React, { useState } from 'react'
import PrefDialog from '../components/PrefDialog';
import styled from 'styled-components';
import EditNoteIcon from '@mui/icons-material/EditNote';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ProgressImage from "../assets/ProgressImage.jpg";
const LearnPage = () => {
  const [prefDialog, setPrefDialog] = useState(true);
  return (
    <Root>
      {prefDialog && <PrefDialog setPrefDialog={setPrefDialog} />}
      <Box className='left-container'>
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
      <Box className='right-container'>
        <Box className='right-header'>
          <Button startIcon={<EditNoteIcon />} className='edit-btn'>Edit Skill Preferrence</Button>
        </Box>
        <Box className='progress-box' style={{ backgroundImage: `url(${ProgressImage})` }}>
          <Typography className='badge-text'>Learning Badge Progress</Typography>
          <Box className='badge-content'>
            <Typography className='progress-text'>Novice</Typography>
            <MilitaryTechIcon className='badge' />
          </Box>

        </Box>
        <Box className='best-learn'>
          <Avatar className='avatar-best' />
          <Box className='stud-desc'>
            <Typography className='best-learner'>"Learner of the week"</Typography>
            <Typography className='learner-name'>Anshuman Kundu</Typography>
            <Button className='tutor-score' startIcon={<EmojiEventsIcon />}>Tutor Score: <span className='score'>75/100</span></Button>
          </Box>
        </Box>
      </Box>
    </Root>
  )
}

const Root = styled.div`
   display: flex;
   .left-container{
    width: 60%;
   }
  .learning-tile{
    border: 1px solid #d0d7de;
    border-radius: 10px; 
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin-top: 10px;
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
    padding: 10px;
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
  .right-container{
    width: 30%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 12%;
    left: 65%;
  }
  .right-header{
    border-bottom: 2px solid #d0d7de;
  }
  .edit-btn{
    color: black;
    font-weight: bold;
    text-transform: none;
  }
  .add-btn{
    color: black;
    font-weight: bold;
    text-transform: none;
    margin-left: 50px;
  }
  .best-learn{
    display: flex;
    margin-top: 20px;
    background: var(--light-grad-pink-blue, radial-gradient(ellipse at 40% 0%, #bf398910 0, #fffacd 30%, transparent 75%), radial-gradient(ellipse at 60% 0%, #096bde10 0, #fffacd 30%, transparent 75%));
    padding: 20px;
    border: 1px solid #d0d7de;
    border-radius: 20px;
    cursor: pointer;
  }
  .avatar-best{
    width: 60px;
    height: 60px;
    background-color: black;
    margin: auto 0px;
  }
  .stud-desc{
    display: flex;
    flex-direction: column;
    margin: auto;
  }
  .best-learner{
    font-size: 18px;
    color: #594202;
    font-weight: bold;
    text-align: center;
  }
  .learner-name{
    font-size: 20px;
    font-weight: bold;
    color: #020c59;
    text-align: center;
  }
  .tutor-score{
    text-transform: none;
    font-size: 14px;
    font-weight: bold;
  }
  .score{
    font-size: 16px;
    font-weight: bold;
    color: #020c59;
  }
  .progress-box{
    margin-top: 20px;
    padding: 10px 20px;
    border: 1px solid #d0d7de;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    background-size: cover; 
  }
  .badge-content{
    display: flex;
  }
  .progress-text{
    padding: 0px 40px;
    border-radius: 20px;
    margin: auto;
    background-color: white;
    color: #020c59;
    border-radius: 5px;
    font-weight: bold;
    text-align: center;
  }
  .badge{
    font-size: 70px;
    color: white;
    margin: auto;
  }
  .badge-text{
    font-size: 18px;
    background-color: white;
    color: black;
    border-radius: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }
`

export default LearnPage

