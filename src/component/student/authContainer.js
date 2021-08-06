import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { StudentSignUp } from './signUp';
import StudentSignIn from './signin';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import CancelSharpIcon from '@material-ui/icons/CancelSharp';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flexStart',
        maxWidth: '650px',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: '90vh'
    },
    header : {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem .8rem',
    },
    container :{
        margin: '2rem auto',
        width: '60vw',
        overflow: 'hidden',
    },
    Input: {
        margin: '.5rem 0',
    },
})

const StudentSignInUp = (props) => {
    const [isSignIn, setIsSignIn] = useState(true)

    const showSignIn = () => {
        setIsSignIn(true)
    }

    const showSignUp = () => {
        setIsSignIn(false)
    }


    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar position="static">
             <div className={classes.header}>
                 <h1> Student Section</h1>
                 <IconButton onClick={props.closeModal}>
                 <CancelSharpIcon fontSize="large" style={{color: 'white'}}/>
                 </IconButton> 
             </div>
             
           </AppBar>

            <Container maxWidth="sm" classes={{root: classes.container}}>
                <Typography component="div" classes={{ root: classes.root }}>

                    <div>
                        <Button variant="contained" color="primary" onClick={showSignIn}>SIGN IN</Button>
                        <Button variant="contained"  onClick={showSignUp}>SIGN UP</Button>
                    </div>
                    {isSignIn ? <StudentSignIn/> : <StudentSignUp/>}
                </Typography>
            </Container>
        </>
    )
}

export default StudentSignInUp
