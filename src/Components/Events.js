import './Styles/Events.css'
import Events from './Events/Events'
import Freshers from './Events/Freshers'
import Colloquium from './Events/Colloquium'
import Dasant from './Events/Dasant'
import Profslec from './Events/Profslec'

export default function StudentSec(){
    return(
        <div id='Events'>
            <Events/>
            <Profslec/>
            <Freshers/>
            <Colloquium/>
            <Dasant/>
        </div>
    )
}