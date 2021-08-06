import style from './header.module.css'
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { tokenAction } from '../../store/action';
export const Header = (props) => {
    let history = useHistory()
    let dispatch = useDispatch()

    const logOut = () => {
        localStorage.removeItem('token');
        dispatch(tokenAction(null))
        history.push('/')
    }
    return (
        <header className={style.header}>
            <nav>
                <h1>LabFile Submission</h1>
                <Button variant="contained" color="secondary" onClick={logOut}>
                    Log Out
                </Button>
            </nav>           
        </header>
    )
}
