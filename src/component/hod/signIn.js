import React,{ useState } from 'react';
import axios from 'axios'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';



const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flexStart',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: '90vh',
        input: {
            margin: '1rem auto'
        }
    },
    container: {
        // width: '60vw',
        overflow: 'hidden'
    }
})

export const HODSignIn = () => {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    }

    const onFormSubmit = () => {
        const value = {
            email,
            password
        }

        axios.post('',value)
        .then(res => console.log('res', res))
        .catch(err => console.log('err', err))
    }

    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <DialogTitle id="customized-dialog-title">
            H O D Section
        </DialogTitle>
            <Container maxWidth="sm" classes={{ root: classes.container }}>
                <Typography component="div" classes={{ root: classes.root }}>
                    <div>
                        <Button variant="contained" color="primary">SIGN IN</Button>
                    </div>
                    <TextField id="outlined-basic" label="Email" variant="outlined"
                        classes={{ root: classes.input }}
                        onChange={emailChangeHandler}
                        
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        classes={{ root: classes.input }}
                        onChange={passwordChangeHandler}
                    />
                    <Button variant="contained" color="secondary" onClick={onFormSubmit}>Submit</Button>

                </Typography>
            </Container>

        </>
    )
}
