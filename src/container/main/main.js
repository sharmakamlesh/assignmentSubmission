import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import style from './main.module.css';
import StudentSignInUp from '../../component/student/authContainer';
import { TeacherSignInUp } from '../../component/teacher/authContainer';
import { HODSignIn } from '../../component/hod/signIn';
import { STUDENT } from '../../constant';
import Dialog from '@material-ui/core/Dialog';


const Main = () => {
    const [studentModal, setStudentModal] = useState(false)
    const [teacherModal, setTeacherModal] = useState(false)
    const [hodModal, sethodModal] = useState(false)

    
    // console.log(state)

    const onCloseHandler = () => {
        setStudentModal(false)
        setTeacherModal(false)
        sethodModal(false)
    }
   

    const showModalHandler = (e) => {

        switch(e.currentTarget.value) {
            case STUDENT:
                console.log(e.currentTarget.value)
                setStudentModal(!studentModal)
                break;
            
            case 'teacher':
                console.log(e.currentTarget.value)
                setTeacherModal(!teacherModal)
                break;    

            case 'hod':
                console.log(e.currentTarget.value) 
                sethodModal(!hodModal)
                break; 
            
            default :
            return e.currentTarget.value;    
        }

    }
    return (<>
        <main className={style.main}>
            <Button variant="contained" color="primary" value='student' onClick={showModalHandler}>
                STUDENT
            </Button>
            <Button variant="contained" color="primary" value='teacher' onClick={showModalHandler}>
                TEACHER
            </Button>
            <Button variant="contained" color="secondary" value='hod' onClick={showModalHandler}>
                H O D
            </Button>
        </main>
        {studentModal && <Dialog onClose={onCloseHandler} aria-labelledby="customized-dialog-title" open={studentModal} ><StudentSignInUp closeModal={onCloseHandler}/></Dialog>}
        {teacherModal && <Dialog onClose={onCloseHandler} aria-labelledby="customized-dialog-title" open={teacherModal} ><TeacherSignInUp closeModal={onCloseHandler}/></Dialog>}
        {hodModal &&  <Dialog onClose={onCloseHandler} aria-labelledby="customized-dialog-title" open={hodModal} ><HODSignIn closeModal={onCloseHandler}/></Dialog>}
        </>
    )
}

export default Main
