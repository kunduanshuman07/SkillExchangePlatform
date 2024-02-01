import React, { useState } from 'react'
import styled from 'styled-components'
import TeachPageDrawer from '../components/TeachPageDrawer'
import TeachHome from '../components/TeachHome'
import TeachTutor from '../components/TeachTutor'
import TeachTest from '../components/TeachTest'

const TeachPage = () => {
  const [drawerTabState, setDrawerTabState] = useState('Home')
  return (
    <Root>
      <TeachPageDrawer drawerTabState={drawerTabState} setDrawerTabState={setDrawerTabState}/>
      {drawerTabState === 'Home' && <TeachHome />}
      {drawerTabState === 'Tutor' && <TeachTutor />}
      {drawerTabState === 'Test' && <TeachTest />}
    </Root>
  )
}

const Root= styled.div`

`

export default TeachPage