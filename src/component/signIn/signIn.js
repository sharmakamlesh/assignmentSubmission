import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        margin: '1rem auto'
    }
})

export const SignIn = () => {
    const classes = useStyles();
    return (
        <>
            <TextField id="outlined-basic" label="Email" variant="outlined" 
                 classes={{ root: classes.root }}
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                classes={{ root: classes.root }}
            />
            <Button variant="contained" color="secondary">Submit</Button>

        </>
    )
}
