import Menubar from './Components/Menubar';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Team from './Components/Team'
import Events from './Components/Events'
import StudentSec from './Components/Student_Section'
import Strength from './Components/Strength'
import Portal from './Components/Portal'
import Contact from './Components/Contact';
import Postu from './Components/Placement/postu';
import Show from './Components/Placement/Show'

function App() {
  return (
    <div className="App">
      <Menubar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/student" element={<StudentSec/>}></Route>
        <Route path="/team" element={<Team/>}></Route>
        <Route path="/events" element={<Events/>}></Route>
        <Route path="/strength" element={<Strength/>}></Route>
        <Route path="/portal" element={<Portal/>}></Route>
        <Route path="/place" element={<Postu/>}></Route>
        <Route path="/contact-us" element={<Contact/>}></Route>
        <Route path="/postulates" element={<Postu/>}></Route>
        <Route path="/:link" element={<Show/>}> </Route>
        {/* <Route path="/ankit" element={<Ankit/>}></Route>
        <Route path="/aryaman" element={<Aryaman_Shandilya/>}></Route>        
        <Route path="/ashutosh" element={<Ashutosh_Ranjan/>}></Route>
        <Route path="/chitwan" element={<Chitwan_Garg/>}></Route>
        <Route path="/dishaa" element={<Dishaa_Rajora/>}></Route>
        <Route path="/dishant" element={<Dishant_Parewa/>}></Route>
        <Route path="/gaurav" element={<Gaurav_Kamboj/>}></Route>
        <Route path="/gauravjiwan" element={<Gaurav_Jiwan/>}></Route>
        <Route path="/himanshu" element={<Himanshu_Mishra/>}></Route>
        <Route path="/jeetendra" element={<JeetendraKP/>}></Route>
        <Route path="/krishan" element={<Krishan_Kumar/>}></Route>
        <Route path="/krishna" element={<Krishna_Deo/>}></Route>
        <Route path="/mradul" element={<Mradul_Chaudhary/>}></Route>
        <Route path="/mudit" element={<Mudit_Kumar/>}></Route>
        <Route path="/naman" element={<Naman_Jain/>}></Route>
        <Route path="/neha" element={<Neha_Aggarwal/>}></Route>
        <Route path="/piyush" element={<Piyush_Senwar/>}></Route>
        <Route path="/rahul" element={<Rahul_Gauriyar/>}></Route>
        <Route path="/rajat" element={<Rajat_Ghoshal/>}></Route>
        <Route path="/samyak" element={<Samyak_Jain/>}></Route>
        <Route path="/samyak18" element={<Samyak_Jain_Y18/>}></Route>
        <Route path="/shashi" element={<Shashi_Shekhar/>}></Route>
        <Route path="/shuaib" element={<Shuaib_Alam/>}></Route>
        <Route path="/vineet" element={<Vineet_Shukla/>}></Route>
        <Route path="/vishal" element={<Vishal_Agarwal/>}></Route>
        <Route path="/yashkrit" element={<Yashkrit_Gupta/>}></Route>
        <Route path="/yashvardhan" element={<Yashvardhan_Raizada/>}></Route> */}
      </Routes>    

      <Footer/>
    </div>
  );
}

export default App;
