import React, { Component } from 'react'
import PropTypes from 'prop-types';

import NavBar from './NavBar';
import ErrorNotifier from '../../core/components/error-toast/ErrorNotifier';

import { withStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

import ShippingLabelMaker from '../shipping-label-maker/ShippingLabelMaker';


const useStyles = theme => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        
    },
    submit: {
        
    },
});

class Landing extends Component {
    constructor(props){
        super(props);

        this.state = {
            logged: false,
            username:'',
            password:''
        }
        this.onChange=this.onChange.bind(this);
        this.checkLogin=this.checkLogin.bind(this);
        this.logout=this.logout.bind(this);
    }
        
    checkLogin(){
        const userId= 'User1';
        const userPass= 'Welcome.1';
        //console.log(this.state.username,this.state.password);
        if(this.state.username === userId && this.state.password === userPass){ 
            this.setState({logged:true});
        };
        //console.log(this.state)
    }
    onChange(event){
        const {target}=event;
        this.setState({[target.name]:target.value});
    }
    logout(){
        let loggedStatus= this.state.logged===true?false:true;
        this.setState({logged:loggedStatus})
    }
    render() {
        const {classes} = this.props;
        return (
            <div>
                {this.state.logged && (<NavBar userName={this.state.username} logout={this.logout}/>)}

                {this.state.logged === false? <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                        Sign in
                        </Typography>
                        <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="Username"
                            autoFocus
                            onChange= {this.onChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange= {this.onChange}
                        />
                        <Button
                            variant='contained'
                            fullWidth
                            color="primary"
                            className={classes.submit}
                            onClick={this.checkLogin}
                        >
                            Sign In
                        </Button>
                        </form>
                    </div>
                </Container>:
                <ShippingLabelMaker />}
            </div>
        )
    }
}
Landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default  withStyles(useStyles)(Landing);