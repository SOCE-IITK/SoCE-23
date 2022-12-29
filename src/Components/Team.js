import './Placement/placement.css'
import './Team/team.css'
import Card from './Team/Team-card'

export default function Postu() {
    return (
        <div className='container' id='place'>
            <div className="row my-3 phone">
                <div className="col-6">
                    <h1 className='text-center'>HOD</h1>
                </div>
                <div className="col-6">
                    <h1 className='text-center' >Advisor</h1>
                </div>
            </div>
            <div className="team-top phone">
                <div className="col-lg-2"></div>
                <Card />
                <div className="col-lg-3"></div>
                <Card />
            </div>
            <div className="row mobile my-4">
                <h1 className='text-center'>HOD</h1>
                <Card />
                <h1 className='text-center' >Advisor</h1>
                <Card/>
            </div>
            <div className="row my-4">
                <h2 className='text-center'>Coordinators</h2>
            </div>
            <div className="row mb-4">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="row my-4">
                <h2 className='text-center'>Design Secretary</h2>
            </div>
            <div className="row mb-4">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="row my-4">
                <h2 className='text-center'>Web Secretary</h2>
            </div>
            <div className="row mb-4">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="row my-4">
                <h2 className='text-center'>Content Secretary</h2>
            </div>
            <div className="row mb-4">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="row my-4">
                <h2 className='text-center'>Events Secretary</h2>
            </div>
            <div className="row mb-4">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}