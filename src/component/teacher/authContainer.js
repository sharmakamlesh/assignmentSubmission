import React,{ useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { TeacherSignIn } from './signIn';
import { TeacherSignUp } from './signUp';
import { makeStyles } from '@material-ui/core/styles';
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
    container: {
        width: '60vw',
        overflow: 'hidden',
    },
    Input: {
        margin: '.5rem 0',
    },
})


export const TeacherSignInUp = () => {
    const [isSignIn , setIsSignIn] = useState(true)

    const classes = useStyles();

    const showSignIn = () => {
        setIsSignIn(true)
    }

    const showSignUp = () => {
        setIsSignIn(false)
    }
    return (
        <>
            <CssBaseline />
            <DialogTitle id="customized-dialog-title">
            Teacher Section
        </DialogTitle>
                <Container maxWidth="sm" classes={{ root: classes.container}}>
                    <Typography component="div" classes={{ root: classes.root }}>
                        <div>
                            <Button variant="contained" color="primary" onClick={showSignIn}>SIGN IN</Button>
                            <Button variant="contained"  onClick={showSignUp}>SIGN UP</Button>
                        </div>
                        {isSignIn ? <TeacherSignIn/> : <TeacherSignUp/>}
                    </Typography>
                </Container>
        </>
    )
}
