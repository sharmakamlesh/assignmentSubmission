import { useState } from "react";
import { Header } from "../../../ui/header/header";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { Files } from "./submissionFiles/files";
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles({
    root: {
      maxWidth: '680px',
      margin: '0 auto',
      textAlign: 'center'
    },
    container: {
        display: 'grid',
        placeItems: 'center',
        gridTemplateColumns: '1fr 1fr'
    },
   btn: {
       margin: '1rem auto'
   }})

   const subject = ['sub 1' , 'sub 2' , 'sub 3', 'sub 4']

export const SubmittedFiles = () => {
    const [modal , setModal] = useState(false)
    const classes = useStyles();
    
    const handleClose = () => {
        setModal(false)
    }

    const handleModalOpen = () => {
        setModal(true)
    }
    

    return (
        <>
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={modal}>
        <Files/>
        </Dialog>
        <Header />
            <h1>Submitted Files</h1>
            <Card className={classes.root} variant="outlined">
                <h3>Subjects</h3>
                <div className={classes.container}>
                {subject.map((sub , index) => {
                    return<Button variant="contained" color="primary" key={index} className={classes.btn} onClick={handleModalOpen}>
                    {sub}
                  </Button>
                })}
                </div>
            </Card>
        </>
    )
}
