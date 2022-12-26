import './placement.css'
import Postulate from './postulate'
import Card from './Card'

export default function Postu() {
    return (
        <div className='container' id='place'>
                <Postulate />
            <div className="row">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}