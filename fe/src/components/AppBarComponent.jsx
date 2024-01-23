import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Button, Tooltip, Typography } from '@mui/material';
import styled from "styled-components";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import InfoIcon from '@mui/icons-material/Info';
import Logo from "../assets/Logo.png";
export const AppBarComponent = ({ comp }) => {
    return (
        <Root>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "white", color: "#086D67" }}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Box style={{ display: "flex", flexDirection: "row" }}>
                                <img src={Logo} alt="logo" width={30} height={30} className='logo' />
                                <Box className='logo-header'>
                                    <Typography className='logo-text'>Swap Skill</Typography>
                                    <Typography className='logo-footer'>Trade your skills</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ ml: "auto" }}>
                                <Button className='about' startIcon={<InfoIcon />}>About Us</Button>
                            </Box>
                            <Box>
                                <Button className='contact' startIcon={<ConnectWithoutContactIcon />}>Contact Us</Button>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </Root>
    );
}

const Root = styled.div`
    .logo-style{
        cursor: pointer
    }
    .logo{
        margin-top: 5px;
        margin-left: 10px;
    }
    .logo-header{
        display: flex;
        flex-direction: column;
        margin-left: -5px;
    }
    .logo-text{
        color: black;
        font-size: 17px;
        padding: 5px 10px 5px 10px;
        border-radius: 20px;
        margin-left: 10px;
        font-weight: bold;
    }
    .logo-footer{
        margin-top: -10px;
        font-size: 10px;
        text-align: center;
        margin-left: 10px;
    }
    .about{
        background-color: black;
        color: white;
        text-transform: none;
        border-radius: 20px;
        padding: 5px 15px;
        border: 2px solid black;
        &:hover{
            color: black;
        }
    }
    .contact{
        background-color: black;
        color: white;
        text-transform: none;
        border-radius: 20px;
        margin-left: 20px;
        padding: 5px 15px;
        border: 2px solid black;
        &:hover{
            color: black;
        }
    }
`

export default AppBarComponent;