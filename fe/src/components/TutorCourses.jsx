import { Box, Button, Card, Rating, Typography, CardContent, Grid } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import AddIcon from "@mui/icons-material/Add";
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const TutorCourses = () => {
    return (
        <Root>
            <Box className='course-container'>
                <Box className='top-container'>
                    <Button className='edit-skill' startIcon={<AddIcon />}>Add New Course</Button>
                    <Button className='filter' startIcon={<FilterAltIcon />}>Filter</Button>
                    <Button className='sort' startIcon={<SwapVertIcon />}>Sort</Button>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Card className='grid-cards'>
                            <CardContent>
                                <Box className='grid-items'>
                                    <Box className='header'>
                                        <Box className='rating-header'>
                                            <Rating value={4} readOnly size='small' className='rating' />
                                            <Typography className='rating-stud'>4000+ Learners</Typography>
                                        </Box>
                                        <Button className='free-paid-btn'>Free</Button>
                                    </Box>
                                    <Box className='footer-one'>
                                        <Typography className='course-name'>React.js</Typography>
                                    </Box>
                                    <Box className='footer-two'>
                                        <Button className='timer' startIcon={<AccessTimeIcon />}>22h 30min</Button>
                                        <Button className='subs' startIcon={<SubscriptionsIcon />}>150 Learners</Button>
                                    </Box>
                                    <Box className='status'>
                                        <Button className='status-btn' variant='outlined'>Status: Test Approval Stage</Button>
                                    </Box>
                                    <Box className='actions'>
                                        <Button className='edit' startIcon={<EditIcon/>}>Edit</Button>
                                        <Button className='delete' startIcon={<DeleteIcon />}>Delete</Button>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Box>
        </Root>
    )
}

const Root = styled.div`
.status{
    display: flex;
}
.status-btn{
    text-transform: none;
    margin: 10px auto 0px auto;
    color: black;
    font-weight: bold;
    border: 1px solid black;
}
    .course-container{
        position: fixed;
        top: 9%;
        left: 17%;
        padding: 20px;
        width: 80%;
    }
    .grid-cards{
        margin-top: 10px;
    }
    .top-container{
        display: flex;
        margin-left: 0px;
        border-bottom: 2px solid #d0d7de;
        width: 100%;
      }
      .edit-skill{
        text-transform: none;
        font-weight: bold;
        color: #4D2C5E;
      }
      .filter{
        text-transform: none;
        font-weight: bold;
        color: #4D2C5E;
        margin-left: auto;
      }
      .sort{
        text-transform: none;
        font-weight: bold;
        color: #4D2C5E;
        margin-left: 20px;
      }
      .grid-container{
        padding-top: 15px;
      }
      .grid-cards{
        padding: 0px;
        border-radius: 15px;
      }
      .grid-items{
        display: flex;
        flex-direction: column;
        cursor: pointer;
      }
      .tutor-img{
        width: 300px;
        height: 170px;
        border-radius: 15px;
        margin: auto;
      }
      .header{
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        margin-left: 15px;
        margin-right: auto;
        border-bottom: 2px dashed #d0d7de;
        padding: 0px 0px 10px 0px;
        width: 90%;
      }
      .tutor-name{
        font-size: 15px;
        font-weight: bold;
        color: #4D2C5E;
        margin-top: 10px;
      }
      .tutor-prof{
        font-size: 12px;
        color: #868686;
        font-weight: bold;
      }
      .rating-header{
        display: flex;
        margin-top: 10px;
      }
      .rating{
        margin-left: -4px;
      }
      .rating-stud{
        color: #868686;
        font-size: 10px;
        font-weight: bold;
        margin: 3px 10px;
      }
      .free-paid-btn{
        color:  #5d05a6;
        text-transform: none;
        font-weight: bold;
        margin-right: auto;
        width: 50px;
        font-size: 15px;
        padding: 0px;
        margin-top: 5px;
        margin-left: -16px;
      }
      .footer-one{
        margin-top: 10px;
        margin-left: 13px;
        display: flex;
      }
      .course-name{
        color: #FF7426;
        font-weight: bold;
        font-size: 18px;
      }
      .icon-btn{
        margin-left: auto;
        margin-top: -8px;
        margin-right: 5px;
      }
      .linkedin{
        color: #0565a6;
      }
      .footer-two{
        display: flex;
      }
      .timer{
        text-transform: none;
        font-weight: bold;
        color: #ACACAC;
        margin-left: 6px;
      }
      .subs{
        text-transform: none;
        font-weight: bold;
        color: #ACACAC;
        margin-left: 20px;
      }
      .actions{
        display: flex;
        margin: auto;
      }
      .edit{
        font-weight: bold;
        text-transform: none;
        border-radius: 20px;
        margin-top: 20px;
        margin-left: 10px;
      }
      .delete{
        color: #575657;
        font-weight: bold;
        text-transform: none;
        border-radius: 20px;
        margin-top: 20px;
        margin-left: 10px;
      }
`

export default TutorCourses