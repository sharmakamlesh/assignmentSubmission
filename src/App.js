import { useEffect , useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route ,Redirect , useHistory } from "react-router-dom";
import Main from './container/main/main';
import { StudentDashboard } from './component/student/dashboard/studentDashboard'
// import { Loader } from './component/loader/loader'
import { useSelector } from 'react-redux';
import {TeacherDashboard} from './component/teacher/dashboard/teacherDashboard';
import { AssignedSubjects} from './component/teacher/dashboard/assignedSubjects';
import {SubmittedFiles} from './component/teacher/dashboard/submittedFiles';
import {PreviousFiles} from './component/teacher/dashboard/previousFiles';
import {CreateAssignment} from './component/teacher/dashboard/createAssignment'
function App() {
  const [token , setToken] = useState(false)

  useEffect(() => {
    console.log('effect')
    const data = localStorage.getItem('token')
    const userToken = JSON.parse(data)
    if(userToken){
      setToken(userToken)
    }

  },[])

  return (<>
        <Route exact path='/'>
        {token.type === 'STUDENT' && <Redirect to='/student'/>}
        {token.type === 'TEACHER' && <Redirect to='/teacher'/>}
        {token.type === 'HOD' && <Redirect to='/'/>}
        <Main/>
        </Route>
        <Route path='/student' component={StudentDashboard} /> 
        <Route exact path='/teacher' component={TeacherDashboard} />    
        <Route path='/teacher/assignedSubjects'component={AssignedSubjects}/>
        <Route path='/teacher/submitted-files'component={SubmittedFiles}/>
        <Route path='/teacher/previous-files'component={PreviousFiles}/>
        <Route path='/teacher/create-assignment'component={CreateAssignment}/>
        <Redirect to='/' />
      </>

  );
}

export default App;
