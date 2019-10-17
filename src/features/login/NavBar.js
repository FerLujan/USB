import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function NavBar(props){
    const { userName,logout} = props;
    const classes = useStyles();
    return(
        <AppBar
        position='static'   
    >
        <Toolbar>
            <IconButton
                edge="end"
                aria-haspopup="true"
                color="inherit"
                >
                <AccountCircle />
            </IconButton>
            <Typography variant='h6'  className={classes.title}>
                {userName}
            </Typography>
            
            <Button color="inherit" onClick={logout}>Logout</Button>
        </Toolbar>
    </AppBar>
    )
}
export default NavBar;