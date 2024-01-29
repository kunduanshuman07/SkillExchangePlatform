import React, { useState } from 'react'
import { Box, Button, TextField, Typography, MenuItem, Dialog, DialogContent } from '@mui/material'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const userType = [
   {
      label: "Learning",
      value: "Learning",
   },
   {
      label: "Teaching",
      value: "Teaching"
   }
];
const skillOptions = [
   {
      label: "React.js",
      value: "React.js",
   },
   {
      label: "Node.js",
      value: "Node.js"
   },
   {
      label: "SQL",
      value: "SQL"
   }
];
const PrefDialog = ({setPrefDialog}) => {
   const [purpose, setPurpose] = useState('')
   const [skill, setSkill] = useState('');
   const navigate = useNavigate();
   const handleExplore = () => {
      navigate('/')
      setPrefDialog(false);
   }
   return (
      <Dialog open>
         <DialogContent>
            <Root>
               <Box className='container'>
                  <Box className='content'>
                     <Box className='header'>
                        <Typography className='header-text'>Set your Preferences</Typography>
                     </Box>
                     <Box className='purpose-field'>
                        <TextField
                           placeholder='Purpose'
                           label='Purpose'
                           size='small'
                           value={purpose}
                           sx={{
                              ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                                 borderRadius: "10px",
                                 border: "2px solid #d0d7de"
                              }
                           }}
                           fullWidth
                           select
                           onChange={(e) => setPurpose(e.target.value)}
                        >
                           {userType.map((option) => (
                              <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                           ))}
                        </TextField>
                     </Box>
                     <Box className='skill-field'>
                        <TextField
                           placeholder='Add skills'
                           label='Add skills'
                           size='small'
                           value={skill}
                           sx={{
                              ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                                 borderRadius: "10px",
                                 border: "2px solid #d0d7de"
                              }
                           }}
                           fullWidth
                           select
                           onChange={(e) => setSkill(e.target.value)}
                        >
                           {skillOptions.map((option) => (
                              <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                           ))}
                        </TextField>
                     </Box>
                     <Box className='next'>
                        <Button className='next-button' variant='contained' color='inherit' onClick={handleExplore}>Start Exploring</Button>
                     </Box>
                  </Box>
               </Box>
            </Root>
         </DialogContent>
      </ Dialog>
   )
}

const Root = styled.div`
 .container{
    display: flex;
  }
  .content{
   display: flex;
   flex-direction: column;
   margin: auto;
   padding: 10px;
   border-radius: 20px;
  }
  .header{
   // width: 600px;
  }
  .header-text{
   font-size: 25px;
   font-weight: bold;
   // border-bottom: 2px solid #d0d7de;
   text-align: center;
   padding-bottom: 10px;
  }
  .purpose-field{
   margin: 30px auto 0px auto;
   width: 300px;
  }
  .skill-field{
   margin: 30px auto 0px auto;
   width: 300px;
  }
  .next{
   margin: 30px auto 10px auto;
  }
  .next-button{
   font-weight: bold;
   border-radius: 10px;
   text-transform: none;
  }
`

export default PrefDialog
