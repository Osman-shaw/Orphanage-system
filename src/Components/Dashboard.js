import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import LogoutIcon from '@mui/icons-material/Logout'
import Tooltip from '@mui/material/Tooltip';

function Dashboard () {

  return (
      <Box sx=''>
        <CssBaseline/>
         <div className={Header}>
           <nav className='container'>
            <Header>
               <Typography>
                Orphanage Management system
               </Typography>
               <Tooltip title='logout'>
               <Button>
               <LogoutIcon/>
             </Button>
             </Tooltip>
            </Header>
            </nav>
           </div>
      </Box>
      
  )
}

export default Dashboard;
 
const Header = styled.div`
   display:flex;
   align-items: center;
   justify-content:space-around;
   padding-top:40px;
`

