import React,{useState} from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Loader } from '../loader/loader'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

        alignItems: 'center',
        backgroundColor: '#fff',
        height: '90vh'
    },
    textField: {
        margin: '.5rem 0',
    },
})

export const StudentSignUp = () => {
    const [name,setName]=useState('')
    const [enroll,setEnroll]=useState('')
    const [dept,setDept]=useState('')
    const [sem,setSem]=useState('')
    const [email,setEmail]=useState('')
    const [password , setPassword] = useState('')
    const [loading , setLoading] = useState(false)
    const classes = useStyles();

 //=================Get a Name================================   
    const nameChangeHandler = (e) => {
        setName(e.target.value)
    } 

//==================Get a Enroll===============================
    const enrollChangeHandler = (e) => {
        setEnroll(e.target.value)
    }

//==================Get Department===============================
    const deptChangeHandler = (e) => {
        setDept(e.target.value)
    }

//==================Get Sem===============================
    const semChangeHandler = (e) => {
        setSem(e.target.value)
    }

//==================Get Email===============================
    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

//==================Get Password===============================
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    }

//********************On Form Submit****************************/    
   const onSubmitHandler = async() => {
       setLoading(true)
       const studentData = {
           name,
           enrollno: enroll,
           password,
           email,
           dept,
           sem
       }
 
      const studentResponse = await axios.post('http://ec2-52-66-84-169.ap-south-1.compute.amazonaws.com/student/registerStudent',studentData)
       .then(res => {
            setLoading(false)
            console.log('res',res)
       })
       .catch(err => {
            setLoading(false)
            console.log('err',err)
       })

       return studentResponse;
   }

    return (
        <>  
            {loading && <Loader/>}
            <TextField id="outlined-basic" label="Name" variant="outlined" classes={{ root: classes.textField }}  size="small" value={name} onChange={nameChangeHandler}/>
            <TextField id="outlined-basic" label="Enroll No." variant="outlined" classes={{ root: classes.textField }} size="small" value={enroll} onChange={enrollChangeHandler}/>
            <TextField id="outlined-basic" label="Department" variant="outlined" classes={{ root: classes.textField }} size="small" value={dept} onChange={deptChangeHandler}/>
            <TextField id="outlined-basic" label="Semster" variant="outlined" classes={{ root: classes.textField }} size="small" value={sem} onChange={semChangeHandler}/>
            <TextField id="outlined-basic" label="Email" variant="outlined" classes={{ root: classes.textField }} size="small" value={email} onChange={emailChangeHandler}/>
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"  
                size="small"
                classes={{ root: classes.Input }}
                value={password}
                onChange={passwordChangeHandler}
            />
            <Button variant="contained" color="secondary" onClick={onSubmitHandler}>Submit</Button>
        </>
    )
}
