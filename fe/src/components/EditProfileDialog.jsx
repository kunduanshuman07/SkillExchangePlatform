import React, { useState } from 'react'
import { Box, Button, TextField, Typography, Dialog, DialogContent, DialogTitle } from '@mui/material'
import styled from 'styled-components'

const EditProfileDialog = ({onCloseModal}) => {
   return (
      <Dialog open fullScreen>
        <DialogTitle>
            <Button onClick={onCloseModal}>Close</Button>
        </DialogTitle>
         <DialogContent>
            <Root>
               <Box className='container'>
                  
               </Box>
            </Root>
         </DialogContent>
      </ Dialog>
   )
}

const Root = styled.div`
 
`

export default EditProfileDialog
