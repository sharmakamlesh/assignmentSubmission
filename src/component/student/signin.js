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
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState(false)
    let dispatch = useDispatch()
    const history = useHistory()

    const logIn = () => {
        setLoading(true)
        const obj = {
          email: "eve.holt@reqres.in",
          password: "cityslicka"
        };
    
        axios
          .post("https://labfile.herokuapp.com/student/login", obj)
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
            setError(true)
            console.log(err)
          });
      };

    const classes = useStyles();
    if(loading){
        return <Loader/>
    }
    if(error){
        <h1>error</h1>
    }
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
            <Button variant="contained" color="secondary" onClick={logIn}>Submit</Button>  
        </>
    )
}


export default StudentSignIn
