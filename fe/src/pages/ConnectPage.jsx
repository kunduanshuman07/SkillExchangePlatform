import { Box } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import ConnectDrawer from '../components/ConnectDrawer';
import ConnectChat from "../components/ConnectChat";
import ConnectActivity from "../components/ConnectActivity";
import ConnectCall from "../components/ConnectCall";
import ConnectCalendar from "../components/ConnectCalendar";
import ConnectFiles from "../components/ConnectFiles";
const ConnectPage = () => {
  const [drawerTabState, setDrawerTabState] = useState('Chat')
  return (
    <Root>
      <Box className='container'>
        <ConnectDrawer setDrawerTabState={setDrawerTabState} drawerTabState={drawerTabState} />
        <Box className='content'>
          {drawerTabState === 'Chat' && <ConnectChat />}
          {drawerTabState === 'Activity' && <ConnectActivity />}
          {drawerTabState === 'Call' && <ConnectCall />}
          {drawerTabState === 'Calendar' && <ConnectCalendar />}
          {drawerTabState === 'Files' && <ConnectFiles />}
        </Box>
      </Box>
    </Root>
  )
}
const Root = styled.div`
  .content{
    padding: 0px;
  }
`

export default ConnectPage