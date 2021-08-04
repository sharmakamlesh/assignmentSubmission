import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { StudentSignUp } from './signUp';
import StudentSignIn from './signin';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flexStart',
       
        alignItems: 'center',
        backgroundColor: '#fff',
        height: '90vh'
    },
    container :{
        width: '60vw',
        overflow: 'hidden',
    },
    Input: {
        margin: '.5rem 0',
    },
})

const StudentSignInUp = () => {
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
            <DialogTitle id="customized-dialog-title">
            Student Section
        </DialogTitle>

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
