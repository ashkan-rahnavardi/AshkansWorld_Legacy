import React, { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Project from "./pages/Project.jsx";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#fefefe'
        },
        black: {
            main: '#000000'
        }
    },
})


export default function App() {

    const [isMobile, setMobile] = useState(useMediaQuery(theme.breakpoints.down('sm')));;
    const [startView, setView] = useState(isMobile ? 'mobile' : 'desktop');
    const [isWide, setWide] = useState(useMediaQuery(theme.breakpoints.up('lg')));

    console.log(startView);
    console.log("isMobile:" + isMobile);
    console.log("isWide:" + isWide);


    function applyBackgroundPhone() {
        if (isMobile && startView == 'desktop') {
            return {
                backgroundImage: 'url(https://i.imgur.com/Mnvj8d8.jpeg)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }
        } else {
            return {}
        }
    }

    function applyPadding() {
        if (isMobile && isWide) {
            return '10vh'
        } else if (isMobile && startView == 'desktop') {
            return '15vh'
        } else {
            return 0
        }
    }

    function applyWidth() {
        if (startView == 'mobile') {
            return '100%'
        } else if (isMobile){
            return 400
        } else {
            return '1080px'
        }
    }


    function toggleMobile() {
        setMobile(!isMobile);
    }


    return (
        <ThemeProvider theme={theme}>
            <Box
                display='flex' 
                justifyContent='center'
                sx={applyBackgroundPhone()}
            >
                <Box
                    display='flex'
                    alignContent={isMobile ? 'center' : 'start'}
                    justifyContent={isMobile ? 'center' : 'start'}
                    height='100vh'
                >
                    <Box
                        width={applyWidth()}
                        height={isMobile ? 800 : '100vh'}
                        paddingTop={applyPadding()}
                    >
                        <Routes>
                            <Route path='/' element={<Layout isMobile={isMobile} />} />
                            <Route path='/projects/:projectId' element={<Project  />} />
                        </Routes>
                        {/* <Button
                            variant='outlined'
                            color='success'
                            sx={{ position: 'sticky', bottom: '0', left: '0' }}
                            onClick={toggleMobile}
                        >
                            {isMobile ? 'View Desktop' : 'View Mobile'}
                        </Button> */}
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

