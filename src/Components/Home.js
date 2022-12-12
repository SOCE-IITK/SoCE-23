import './Styles/home.css'
import Slider from './Home/Slider'
import About from './Home/About'
export default function Home(){
    return(
        <div id='home'>
            <About/>
            <Slider/>
        </div>
    )
}