import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import App from './App';
import './App.scss';
import Main from './pages/Main.jsx';
import Project from './pages/Project.jsx';

const theme = createTheme({
	palette: {
		primary: {
			main: '#fefefe',
		},
		black: {
			main: '#000000',
		},
		blue: {
			main: '#13005A',
		},
		secondary: {
			main: '#7F8487',
			darker: '#000000',
		},
	},
});

export default function Layout({ children }) {
	const [isMobile, setMobile] = useState(
		useMediaQuery(theme.breakpoints.down('sm'))
	);
	const [startView, setView] = useState(isMobile ? 'mobile' : 'desktop');
	const [isWide, setWide] = useState(useMediaQuery(theme.breakpoints.up('lg')));

	function applyBackgroundPhone() {
		if (isMobile && startView == 'desktop') {
			return {
				backgroundImage: 'url(https://i.imgur.com/Mnvj8d8.jpeg)',
				backgroundSize: 'contain',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
			};
		} else {
			return {};
		}
	}

	function applyPadding() {
		if (isMobile && isWide) {
			return '10vh';
		} else if (isMobile && startView == 'desktop') {
			return '15vh';
		} else {
			return 0;
		}
	}

	function applyWidth() {
		if (startView == 'mobile') {
			return '100%';
		} else if (isMobile) {
			return 400;
		} else {
			return '1080px';
		}
	}

	function toggleMobile() {
		setMobile(!isMobile);
	}

	return (
		<ThemeProvider theme={theme}>
			<Box className="App" display="flex" justifyContent="center">
				<Box width="1080px">
					<App isMobile={isMobile} />
				</Box>
			</Box>
		</ThemeProvider>
	);

	// return (
	// 	<ThemeProvider theme={theme}>
	// 		<Box
	// 			className="App"
	// 			display="flex"
	// 			alignContent={isMobile ? 'center' : 'start'}
	// 			justifyContent="center"
	// 			sx={applyBackgroundPhone()}
	// 		>
	// 			<Box
	// 				width={applyWidth()}
	// 				// height={isMobile ? 800 : '100vh'}
	// 				paddingTop={applyPadding()}
	// 			>
	// 				<App isMobile={isMobile} />
	// 				{/* <Outlet /> */}
	// 			</Box>
	// 		</Box>
	// 		{/* <Button
	// 			variant="outlined"
	// 			color="success"
	// 			sx={{ position: 'sticky', bottom: '0', left: '0' }}
	// 			onClick={toggleMobile}
	// 		>
	// 			{isMobile ? 'View Desktop' : 'View Mobile'}
	// 		</Button> */}
	// 	</ThemeProvider>
	// );
}
