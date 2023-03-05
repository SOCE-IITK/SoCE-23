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
import Team from './Components/Team';
import Contact from './Components/Contact';
import Postu from './Components/Placement/postu';
import Ankit from './Components/blogs/Ankit';
import Aryaman_Shandilya from './Components/blogs/Aryaman_Shandilya';
import Ashutosh_Ranjan from './Components/blogs/Ashutosh_Ranjan';
import Chitwan_Garg from './Components/blogs/Chitwan_Garg';
import Dishaa_Rajora from './Components/blogs/Dishaa_Rajora';
import Dishant_Parewa from './Components/blogs/Dishant_Parewa';
import Gaurav_Kamboj from './Components/blogs/Gaurav_Kamboj';
import Gaurav_Jiwan from './Components/blogs/Gaurav_Jiwan';
import Himanshu_Mishra from './Components/blogs/Himanshu_Mishra';
import JeetendraKP from './Components/blogs/JeetendraKP';
import Krishan_Kumar from './Components/blogs/Krishan_Kumar';
import Krishna_Deo from './Components/blogs/Krishna_Deo';
import Mradul_Chaudhary from './Components/blogs/Mradul_Chaudhary';
import Mudit_Kumar from './Components/blogs/Mudit_Kumar';
import Naman_Jain from './Components/blogs/Naman_Jain';
import Neha_Aggarwal from './Components/blogs/Neha_Aggarwal';
import Piyush_Senwar from './Components/blogs/Piyush_Senwar';
import Rahul_Gauriyar from './Components/blogs/Rahul_Gauriyar';
import Rajat_Ghoshal from './Components/blogs/Rajat_Ghoshal';
import Samyak_Jain from './Components/blogs/Samyak_Jain';
import Samyak_Jain_Y18 from './Components/blogs/Samyak_Jain_Y18';
import Shashi_Shekhar from './Components/blogs/Shashi_Shekhar';
import Shuaib_Alam from './Components/blogs/Shuaib_Alam';
import Vineet_Shukla from './Components/blogs/Vineet_Shukla';
import Vishal_Agarwal from './Components/blogs/Vishal_Agarwal';
import Yashkrit_Gupta from './Components/blogs/Yashkrit_Gupta';
import Yashvardhan_Raizada from './Components/blogs/Yashvardhan_Raizada';

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
        <Route path="/ankit" element={<Ankit/>}></Route>
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
        <Route path="/yashvardhan" element={<Yashvardhan_Raizada/>}></Route>
      </Routes>    

      <Footer/>
    </div>
  );
}

export default App;
