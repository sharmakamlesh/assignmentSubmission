import style from './header.module.css'
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'
export const Header = (props) => {
    let history = useHistory()

    const logOut = () => {
        localStorage.removeItem('token');
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
