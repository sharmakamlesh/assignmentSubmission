import style from './table.module.css';
import { Header } from '../../../ui/header/header';
import { subjects } from '../../../constant';


export const AssignedSubjects = () => {
  
    return(<>
         <Header/>
        <h1>Assigned Subjects</h1>
        <div className={style.tableContainer}>
          <div className={style.tableHead}>
            <h3>No.</h3>
            <h3>Subjects</h3>
          </div>
          {subjects.map(sub => {
            return<div key={sub.id}>
                      <span>{sub.id}</span>
                      <sapn>{sub.subject}</sapn>
                  </div>
          })}
        </div>

      </>)

}

