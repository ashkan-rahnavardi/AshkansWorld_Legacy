import React, { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import iphone from './images/iphone3.png'

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

    console.log(startView);

    // const styles = {
    //     desktop 
    // }


    function toggleMobile() {
        setMobile(!isMobile);
    }

    console.log(isMobile);

    const mobileBackground = {
        backgroundImage: 'url(https://i.imgur.com/Mnvj8d8.jpeg)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    return (
        <ThemeProvider theme={theme}>
            <Box
                display='flex' 
                justifyContent='center'
                sx={(isMobile && startView == 'desktop') ? mobileBackground : {}}
            >
                <Box
                    display='flex'
                    alignContent={isMobile ? 'center' : 'start'}
                    justifyContent={isMobile ? 'center' : 'start'}
                    height='100vh'
                >
                    <Box
                        width={isMobile ? 400 : '1080px'}
                        height={isMobile ? 800 : '100vh'}
                        paddingTop={(isMobile && startView == 'desktop') ? 20 : 0}
                    >
                        <Layout isMobile={isMobile} />
                        <Button
                            variant='outlined'
                            color='success'
                            sx={{ position: 'fixed', bottom: '0', left: '0' }}
                            onClick={toggleMobile}
                        >
                            {isMobile ? 'View Desktop' : 'View Mobile'}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

