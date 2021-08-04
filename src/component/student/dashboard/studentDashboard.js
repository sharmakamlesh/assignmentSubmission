import React from 'react';
import style from './home.module.css';
import Button from '@material-ui/core/Button';
import { isLoggedIn } from '../../../store/action/index';
// import { isLoggedIn } from '../../../store/reducer/isLoggedIn';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

export const StudentDashboard = () => {
    let dispatch = useDispatch()
    const history = useHistory()
    const logOut = () => {
        localStorage.removeItem('token')
        dispatch(isLoggedIn())
        history.push('/')
        // dispatch(LogInAction({newToken: null}))
    }
    return (
        <>
        <header className={style.header}>
            <nav>
                <h1>Labfile Submission</h1>
                <Button variant="contained" color="secondary" onClick={logOut}>Log Out</Button> 
            </nav>
        </header>
        <h1>Student</h1>
        </>
    )
}
