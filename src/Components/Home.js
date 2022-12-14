import './Styles/home.css'
import Slider from './Home/Slider'
import About from './Home/About'
// import Hello from './Hello'
import Message from './Home/Message'
export default function Home(){
    return(
        <div id='home'>
           
            <About/>
            <Slider/>
            <Message/>
        </div>
    )
}