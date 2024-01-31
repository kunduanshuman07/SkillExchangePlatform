import { Box } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import ConnectDrawer from '../components/ConnectDrawer'

const ConnectPage = () => {
    const [drawerTabState, setDrawerTabState] = useState('Chat')
  return (
    <Root>
        <Box className='container'>
            <ConnectDrawer setDrawerTabState={setDrawerTabState} drawerTabState={drawerTabState}/>
        </Box>
    </Root>
  )
}
const Root = styled.div`

`

export default ConnectPage