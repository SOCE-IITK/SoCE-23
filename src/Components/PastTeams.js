import React from 'react'
import './Styles/teams.css'
const PastTeams = () => {

    return (
        <div className='pastTeams'>
            <div className="container" id="strength">
                <div className="str">
                    <div className="row pastHeading" >
                        <h1>Past Teams</h1>
                    </div>
                </div>

                <div className="str-row past-div">
                    <div className="str-card past-team-year">
                        <h1 className="text-center"><a href='/team/team20'>Team 2020</a></h1>

                    </div>
                    <div className="str-card past-team-year">
                        <h1 className="text-center"><a href='/team/team21'>Team 2021</a></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PastTeams