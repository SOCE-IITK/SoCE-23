import './Styles/Events.css'
import Events from './Events/Events'
import Freshers from './Events/Freshers'
import Colloquium from './Events/Colloquium'
import Dasant from './Events/Dasant'
export default function StudentSec(){
    return(
        <div id='Events'>
           
            <Events/>
            <Freshers/>
            <Colloquium/>
            <Dasant/>
        </div>
    )
}