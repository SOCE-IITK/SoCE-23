import './Styles/strength.css'

export default function Portal() {
    return (
        <>
            <div className="container" id="portal">
                <div className="str">
                    <div className="row">
                        <h1>Portals</h1>
                    </div>
                    <div className="row">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining.
                        </p>
                    </div>
                </div>

                <div className="str-row">
                    <div className="str-card ptr">
                        <h1 className='text-center' >Internship</h1>
                        <button className='str-btn'>Open</button>
                    </div>
                    <div className="str-card ptr">
                        <h1 className='text-center' >CivERE</h1>
                        <button className='str-btn'>Open</button>
                    </div>
                </div>
            </div>
        </>
    )
}