import './Styles/Student.css'
import Student from './Student/student'
import Resume from './Student/resume'
import Placement from './Student/placement'
import Summer from './Student/summer'
import Session from './Student/session'
import Blogs from './Student/blogs'
import Research_Seminar from './Student/Research_Seminar'
import Mitacs from './Student/mitacs'
export default function StudentSec(){
    return (
      <div id="StudentSec">
        <Student />
        <Research_Seminar />
        <Mitacs />
        <Blogs />
        <Summer />
        {/* <Resume/>
            <Placement/>
            <Blogs/>
             <Summer/>
            <Session/> */}
          
      </div>
    );
}