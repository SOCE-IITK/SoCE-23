import './placement.css'
import Postulate from './postulate'
import Card from './Card'
import chats from '../../database/placement'
export default function Postu() {
    return (
        <div className='container' id='place'>
            <Postulate />
            <div className="row">
                <Card postulates={chats} />
            </div>
        </div>
    )
}