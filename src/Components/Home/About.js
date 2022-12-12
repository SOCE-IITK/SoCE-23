import '../Styles/about.css'
export default function About() {
    return (
        <div className='container-fluid' id='about'>
            <div className='row'>
                <div className='col' id='soce-name'>
                    <h3>Society of</h3>
                    <h3>Civil Engineers</h3>
                </div>
            </div>
            <div className='row'>
                <div className='col' id='about-col'>
                    <button type='button' className='btn btn-light'>About Us</button>
                </div>
            </div>
        </div>
    )
}