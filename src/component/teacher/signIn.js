import React,{ useState } from 'react';
import { useHistory } from 'react-router'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        margin: '1rem auto'
    }
})

export const TeacherSignIn = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('')
    let history = useHistory()
    const onSubmit = () => {
        let valueObj ={
            email,
            password
        }
        axios.post('https://labfile.herokuapp.com/teacher/login',valueObj)
        .then(res => {
            console.log(res.data.data.token)
            const token = res.data.data.token
            localStorage.setItem('token',JSON.stringify({
                "type": "TEACHER",
                "token": token
            }))
            history.push('/teacher')

        })
        .catch(err => console.log(err))
    }
    const classes = useStyles();
    return (
        <>
            <TextField id="outlined-basic" label="Email" variant="outlined" 
                 classes={{ root: classes.root }}
                 onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                classes={{ root: classes.root }}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" color="secondary" onClick={onSubmit}>Submit</Button>
        </>
    )
}
