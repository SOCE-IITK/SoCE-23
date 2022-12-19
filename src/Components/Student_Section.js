import './Styles/Student.css'
import Student from './Student/student'
import Resume from './Student/resume'
import Placement from './Student/placement'
import Summer from './Student/summer'
import Session from './Student/session'
export default function StudentSec(){
    return(
        <div id='StudentSec'>
           
            <Student/>
            <Resume/>
            <Placement/>
            <Summer/>
            <Session/>
        </div>
    )
}