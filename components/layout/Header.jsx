import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

// function mySearch(){
//     return <Searchindex/>
// }

const  Header = (props)=> {
   
    return (
        <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" >
            Online Bus Ticket
          </Typography>
          <Button color="inherit"> Book </Button>
        </Toolbar>
      </AppBar>
    );
};
export default Header;