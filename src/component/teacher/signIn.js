import React,{ useState } from 'react';
import { useHistory } from 'react-router'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


//===================CSS Style Material UI========================================
const useStyles = makeStyles({
    root: {
        margin: '1rem auto'
    }
})

const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}



export const TeacherSignIn = () => {
//===============Email Input Values==========
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

//=================Set Error===============
    const [emailError , setEmailError] = useState(false);
    const [passwordError , setPasswordError] = useState(false)
    let history = useHistory()

//=====================Email Handler======================
    const onEmailChange = (e) => {
        setEmailError(false)
        setEmail(e.target.value)
    }

//=======================Password Handler=====================
    const onPasswordChange = (e) => {
        setPasswordError(false)
        setPassword(e.target.value)
    }

//=======================Submit Handler========================
    const onSubmit = () => {
       //if there is not a single input
        if(email.trim().length === 0 || email.trim() === '' || email.trim() === null || email.trim() === undefined) {
            setPasswordError(true)
            return setEmailError(true)
        }

       //check email and password condition
       const emailValidation = email.trim().includes('@') && email.trim().includes('.') && email.trim().length >= 6
       const passwordValidation = password.trim().length >=6
       
       //return error of email or password
        if(emailValidation === false) {
            setEmailError(true)
            return console.log('eroor @ and .')
        }

        if (passwordValidation === false) {
            setPasswordError(true)
            return console.log('password length should be greater than 6')
        }

       //if its valid email and password
        if(emailValidation === true && passwordValidation === true) {
            let valueObj ={
                email,
                password
            }
        //api request for log in    
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
    }
    const classes = useStyles();
    return (
        <>
            <div style={style}>
            <TextField
                error={emailError}
                id={emailError ? "outlined-error-helper-text" :"outlined-basic"}
                label="Email"
                variant="outlined" 
                helperText={emailError && "Enter Valid Email."}
                classes={{ root: classes.root }}
                onChange={onEmailChange}
            />
            
            <TextField
                error={passwordError} // if its error
                id={passwordError ? "outlined-error-helper-text" :"outlined-basic"}
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                helperText={passwordError && "Must be at least 6 character"} // error handling
                classes={{ root: classes.root }}
                onChange={onPasswordChange}
            />
            <Button variant="contained" color="secondary" onClick={onSubmit}>Submit</Button>
            </div>
        </>
    )
}
