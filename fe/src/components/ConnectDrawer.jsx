import React from 'react'
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import styled from "styled-components";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatIcon from '@mui/icons-material/Chat';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DuoIcon from '@mui/icons-material/Duo';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import DrawerItem from './DrawerItem';
const drawerWidth = 100;
const ConnectDrawer = ({drawerTabState, setDrawerTabState}) => {
    return (
        <Root>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: "white", transition: 'width 350ms' },
                }}
            >
                <Toolbar />
                <Box sx={{ cursor: "pointer" }}>
                    <List>
                        <DrawerItem setDrawerTabState={setDrawerTabState} icon={<NotificationsActiveIcon />} text="Activity" drawerTabState={drawerTabState}/>
                        <DrawerItem setDrawerTabState={setDrawerTabState} icon={<ChatIcon />} text="Chat" drawerTabState={drawerTabState}/>
                        <DrawerItem setDrawerTabState={setDrawerTabState} icon={<CalendarMonthIcon />} text="Calendar" drawerTabState={drawerTabState}/>
                        <DrawerItem setDrawerTabState={setDrawerTabState} icon={<DuoIcon />} text="Call" drawerTabState={drawerTabState}/>
                        <DrawerItem setDrawerTabState={setDrawerTabState} icon={<AddToDriveIcon />} text="Files" drawerTabState={drawerTabState}/>
                    </List>
                </Box>
            </Drawer>
        </Root >
    )
}

const Root = styled.div`

`

export default ConnectDrawer;

