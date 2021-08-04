import {Header} from '../../../ui/header/header';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router , Switch , Route , Link} from 'react-router-dom';
import { Container } from '../../../ui/container/container';

export const TeacherDashboard = () => {
    const linkStyle = {
        textDecoration: 'none',
        margin: '1rem auto'
    }
    return( <>
                <Header>
                    <h1>Labfile Submission</h1>
                    <Button variant="contained" color="secondary">Log Out</Button>
                </Header>

                <Container>
                    <Link to='/teacher/assignedSubjects' style={linkStyle}>
                        <Button variant="contained" color="primary">
                            Assigned Subjects
                        </Button>
                    </Link>

                    <Link to='/teacher/submitted-files' style={linkStyle}>
                        <Button variant="contained" color="primary">
                            Submitted Files  
                        </Button>
                    </Link>

                    <Link to='/teacher/previous-files' style={linkStyle}>
                        <Button variant="contained" color="primary">
                            Previous Files
                        </Button>
                    </Link>

                    <Link to='/teacher/create-assignment' style={linkStyle}>
                        <Button variant="contained" color="primary">
                            Create Assignment
                        </Button>
                    </Link>
                </Container>
            </>
    )
}
