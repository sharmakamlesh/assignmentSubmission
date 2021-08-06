import React,{ useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { TeacherSignIn } from './signIn';
import { TeacherSignUp } from './signUp';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import CancelSharpIcon from '@material-ui/icons/CancelSharp';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flexStart',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: '90vh',
        margin: '1rem 0 0 0'
    },
    container: {
        width: '100vw',
        margin: '0 auto',
        overflow: 'hidden',
    },
    Input: {
        margin: '.5rem 0',
    },
    header : {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem .8rem',
    },
})


export const TeacherSignInUp = (props) => {
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

            <AppBar position="static">
                <div className={classes.header}>
                 <h1> Teacher Section</h1>
                 <IconButton onClick={props.closeModal}>
                 <CancelSharpIcon fontSize="large" style={{color: 'white'}}/>
                 </IconButton> 
                </div>
            </AppBar>

            <Container maxWidth="sm" classes={{ root: classes.root}}>
                <Typography component="div" >
                    <div style={{display: 'grid', placeItems: 'center',gridTemplateColumns:'1fr 1fr'}}>
                        <Button variant="contained" color="primary" onClick={showSignIn}>SIGN IN</Button>
                        <Button variant="contained"  onClick={showSignUp}>SIGN UP</Button>
                    </div>
                    {isSignIn ? <TeacherSignIn/> : <TeacherSignUp/>}
                </Typography>
            </Container>
        </>
    )
}
