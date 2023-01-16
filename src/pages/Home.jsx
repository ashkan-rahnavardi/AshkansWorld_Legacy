import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import headShot from '../images/MillionDollarMullet.png'
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// const theme = createTheme({
//   typography: {
//     fontFamily: [
//       'Courgette', 'cursive',
//     ].join(','),
//   }
// })

// const theme = useTheme();

export default function Home({ mobile }) {

  const photo = 'https://i.imgur.com/NJE1iHf.jpg'
  
  function direction() {
    if (mobile) {
      return ('column')
    } else {
      return ('row')
    }
  };


  return (
    <Box
    display='flex'
    justifyContent='center'
    alignItems='center'
    minHeight={mobile ? '60vh' : '80vh'}
    flexDirection={direction}
    gap='10%'
    
  >
      <Box 
        id='homeText'
        fontSize={mobile ? 'x-small': 'medium'}
        textAlign='center' 
      >

        <h1>Howdy! I am Ashkan Rahnavardi</h1>
        <h3>
          Code, a work of art,<br />
          Pleasure, a skill honed with care,<br />
          Balance in all things.
        </h3>
      </Box>
      <Box
        component='img'
        src={photo}
        sx={{height: '30vh'}}
        >

      </Box>
  </Box>
  );
}