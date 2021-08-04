import TextField from '@material-ui/core/TextField';
import { Header } from "../../../ui/header/header";
import style from './createAssignment.module.css';
import Button from '@material-ui/core/Button';


export const CreateAssignment = () => {
    return (<>
        <Header />
        <div className={style.createAssignment}>
            <h1>Create Assignment</h1>
            <TextField id="outlined-basic" label="Add Assignment" variant="outlined" />   
            <Button variant="contained" color="primary">
                Create Asssignment
            </Button>
        </div>
        </>
    )
}
