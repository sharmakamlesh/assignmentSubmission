import React,{ useState } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

        alignItems: 'center',
        backgroundColor: '#fff',
        height: '90vh'
    },
    Input: {
        margin: '.5rem 0',
    },
})

export const TeacherSignUp = () => {
    
    const [name , setName] = useState('')
    const [ dept , setDept] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const classes = useStyles(); 

    //==============Get a Name================
    const onNameChange = (e) => {
        setName(e.target.value)
    }
    
    //==============Get a Department================
    const onDepartmentChange = (e) => {
        setDept(e.target.value)
    }
    
    //==============Get a Email================
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }
        
    //==============Get a Password================
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    //==============Get a Password================
    const onSubmitHandler = (e) => {
        const teacherData = {
            name: name,
            department: dept,
            mail: email,
            password: password
        }

        axios.post("https://jsonplaceholder.typicode.com/posts", teacherData)
        .then(res => console.log('res',res))
        .catch(err => console.log(err))
    }

    

    return (
        <>
        <div style={style}>
            <TextField id="outlined-basic" label="Name" variant="outlined" classes={{ root: classes.Input }} value={name} onChange={onNameChange}/>
            <TextField id="outlined-basic" label="Department" variant="outlined" classes={{ root: classes.Input }} value={dept} onChange={onDepartmentChange }/>
            <TextField id="outlined-basic" label="Email" variant="outlined" classes={{ root: classes.Input }} value={email} onChange={onEmailChange} />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                classes={{ root: classes.Input }}
                value={password}
                onChange={onPasswordChange}
            />
            <Button variant="contained" color="secondary" onClick={onSubmitHandler}>Submit</Button>
            </div>
        </>
    )
}
