import React from "react";
import Box from '@mui/material/Box';
import LogoutIcon from '@mui/icons-material/Logout'
import Tooltip from '@mui/material/Tooltip';
import { AppBar, 
         Toolbar,
        Typography, 
        Avatar, IconButton,
       Button} from '@mui/material';


function Navbar () {

return(
 <Box sx={{ flexGrow: 1 }}>
   <AppBar position="static" color="success">
    <Toolbar>
     <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center"}}>
       Orphanage Management system
      </Typography>
      <IconButton color="inherit">
        < Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </IconButton>
    
        <Tooltip title='logout'>
         <Button color="inherit">
          <LogoutIcon/>
          </Button>
         </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
);
}


export default Navbar;

