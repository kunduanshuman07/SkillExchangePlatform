import React, { useState } from 'react'
import { Box, Button, Grid, TextField, InputAdornment, IconButton } from '@mui/material'
import styled from 'styled-components'
import backgroundImage from "../assets/RegisterBackground.jpg"
import AppBarComponent from '../components/AppBarComponent'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
const RegisterPage = () => {
    const [infoState, setInfoState] = useState('profile');
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <Root>
                <AppBarComponent />
            <Box className='container'>
                <img src={backgroundImage} alt='background' className='bg-img' />
                <Box className='content'>
                    <Box className='tabs'>
                        <Button className='profile-btn' onClick={() => setInfoState('profile')} style={{ backgroundColor: infoState === 'profile' ? '#646262' : "black" }}>Your Profile</Button>
                        <Button className='pinfo-btn' onClick={() => setInfoState('pinfo')} style={{ backgroundColor: infoState === 'pinfo' ? '#646262' : "black" }}>Personal Information</Button>
                    </Box>
                    <Box className='content-segment'>
                        {infoState === 'profile' ? <Box className='your-profile'>
                            <Grid container spacing={3} className='grid-container'>
                                <Grid item xs={6}>
                                    <TextField placeholder='First Name' size='small' label='First Name' required fullWidth />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField placeholder='Last Name' size='small' label='Last Name' required fullWidth />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField placeholder='Email' size='small' label='Email' required fullWidth />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField placeholder='Phone' size='small' label='Phone' required fullWidth />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField placeholder='Password' size='small' label='Password' required fullWidth
                                        type={showPassword?"text": "password"}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={togglePasswordVisibility} size='small'>
                                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField placeholder='Confirm Password' size='small' label='Confirm Password' required fullWidth />
                                </Grid>
                            </Grid>
                            <Button className='next-btn'>Next</Button>
                        </Box> : <Box className='personal-info'>
                            <Grid container spacing={3} className='grid-container'>
                                <Grid item xs={6}>
                                    <TextField placeholder='Age' size='small' label='Age' required fullWidth />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField placeholder='Gender' size='small' label='Gender' required fullWidth />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField placeholder='Education' size='small' label='Education' required fullWidth />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField placeholder='Employment' size='small' label='Employment' required fullWidth />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField placeholder='Password' size='small' label='Password' required fullWidth />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField placeholder='Confirm Password' size='small' label='Confirm Password' required fullWidth />
                                </Grid>
                            </Grid>
                            <Button className='next-btn'>Next</Button>
                        </Box>}

                    </Box>
                </Box>
            </Box>
        </Root>
    )
}

const Root = styled.div`
 .container{
    display: flex;
  }
 .bg-img{
    position: absolute;
    height: 100%;
    width: 100%;
 }
 .content{
    display: flex;
    flex-direction : column;
    background-color: white;
    height: 350px;
    width: 600px;
    box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    border: none;
    padding: 0px;
 }
 .content-segment{
    display: flex;
 }
 .tabs{
    margin-top: 5px;
    display: flex;
 }
 .profile-btn{
    width: 290px;
    background-color: black;
    color: white;
    height: 50px;
    border-radius: 10px;
    text-transform: none;
    margin: auto;
    font-weight: bold;
 }
 .pinfo-btn{
    width: 290px;
    background-color: black;
    color: white;
    height: 50px;
    border-radius: 10px;
    text-transform: none;
    margin: auto;
    font-weight: bold;
 }
 .your-profile{
    width: 90%;
    margin: 40px 0px 0px 30px;
    display: flex;
    flex-direction: column;
 }
 .personal-info{
    width: 90%;
    margin: 40px 0px 0px 30px;
    display: flex;
    flex-direction: column;
 }
 .next-btn{
    margin: 30px auto;
    background-color: black;
    color: white;
    width: 100px;
    text-transform: none;
    border-radius: 10px;
    padding: 5px 15px;
    border: 2px solid black;
    font-weight: bold;
    &:hover{
        color: black;
    }
 }
`

export default RegisterPage
