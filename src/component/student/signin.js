import React,{ useState } from 'react';
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Loader } from '../loader/loader';
import { useDispatch } from 'react-redux';
import { LogInAction } from '../../store/action';
import { useHistory } from 'react-router-dom'
const useStyles = makeStyles({
    root: {
        margin: '1rem auto'
    }
})


const StudentSignIn = () => {
    const [loading , setLoading] = useState(false);
    //Email and Password 
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    
    //Set Error
    const [emailError , setEmailError] = useState(false);
    const [passwordError ,  setPasswordError] = useState(false);

    let dispatch = useDispatch()
    const history = useHistory()

    //========On Email Change===========
    const onEmailChange = (e) => {
        setEmailError(false)
        setEmail(e.target.value)
    }

    //========On Password Change=========
    const onPasswordChange = (e) => {
        setPasswordError(false)
        setPassword(e.target.value)
    }

    const onSignIn = () => {
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
        if(emailValidation === true && passwordValidation === true){
            setLoading(true)
            const obj = {
                email,
                password,
              };
          
              axios.post("https://labfile.herokuapp.com/student/login", obj)
                .then((res) => {
                  setLoading(false)
                  console.log(res)
                  history.push('/student')
                  dispatch(LogInAction({
                      newToken: res.data.token,
                  }))
                  localStorage.setItem('token',JSON.stringify({
                      type: 'STUDENT',
                      token: res.data.token
                  }))
                })
                .catch((err) => {
                  setLoading(false)
                 
                  console.log(err)
                });
        }                
      };

    const classes = useStyles();
    if(loading){
        return <Loader/>
    }

    return (
        <>
            
            <TextField
                error={emailError}
                id={emailError ? "outlined-error-helper-text" :"outlined-basic"}
                helperText={emailError && "Enter Valid Email."}
                label="Email" 
                variant="outlined" 
                classes={{ root: classes.root }}
                onChange={onEmailChange}
            />
            <TextField
                error={passwordError} 
                id={passwordError ? "outlined-error-helper-text" :"outlined-basic"}
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                helperText={passwordError && "Must be at least 6 character"}
                classes={{ root: classes.root }}
                onChange={onPasswordChange}
            />
            <Button variant="contained" color="secondary" onClick={onSignIn}>Submit</Button>  
        </>
    )
}


export default StudentSignIn
