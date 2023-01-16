import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const Projects = () => {
  // const [open, setOpen] = useState(false);

  // const handleClick = () => {
  //   setOpen(!open);
  // };

  // return (
  //   <List
  //     sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
  //     component="nav"
  //     aria-labelledby="nested-list-subheader"
  //     subheader={
  //       <ListSubheader component="div" id="nested-list-subheader">
  //         Predictive Analytics
  //       </ListSubheader>
  //     }
  //   >
  //     <ListItemButton onClick={handleClick}>
  //       <ListItemIcon>
  //         <InboxIcon />
  //       </ListItemIcon>
  //       <ListItemText primary="Inbox" />
  //       {open ? <ExpandLess /> : <ExpandMore />}
  //     </ListItemButton>
  //     <Collapse in={open} timeout="auto" unmountOnExit>
  //       <List component="div" disablePadding>
  //         <ListItemButton sx={{ pl: 4 }}>
  //           <ListItemIcon>
  //             <StarBorder />
  //           </ListItemIcon>
  //           <ListItemText primary="Starred" />
  //         </ListItemButton>
  //       </List>
  //     </Collapse>
  //   </List>
  // );

  return (
    <Box
      display='flex'
      maxWidth='1040px'
    >
      <Box
        display='flex'
        width='100%'
        height='100%'
        justifyContent='space-between'
        flexWrap='wrap'
        alignContent='center'
        flex='1'
      >
        <Card
          sx={{width: '50%'}}>
          KEKEKE
        </Card>
        <Card>
          KEKEKE
        </Card>
        <Card>
          KEKEKE
        </Card>
      </Box>
    </Box>
  )
};

export default Projects;