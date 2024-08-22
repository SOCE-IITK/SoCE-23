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
import Archive from './Components/Archive/archive';
import Report from './Components/Report'
import Contact from './Components/Contact';
import Postu from './Components/Placement/postu';

import Show from './Components/Placement/Show'
import PastTeams from './Components/PastTeams';
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
import Sandipan_Mitra from './Components/blogs/Sandipan_Mitra';
import Meet_Saiya from './Components/blogs/Meet_Saiya';
import Srajan_Jain from './Components/blogs/Srajan_Jain';
import Aditya_Gupta from './Components/blogs/Aditya_Gupta';
import Ayush_Dwivedi from './Components/blogs/Ayush_Dwivedi';
import Ashish_Singh from './Components/blogs/Ashish_Singh';
import Ajeet_Kushwaha from './Components/blogs/Ajeet_kushwaha_Y20';
import Prajakta_Kapre from './Components/blogs/Prajakta_Kapre';
import Gallery from './Components/Gallery/Gallery';
import Narendra_prajapat from './Components/blogs/Narendra_prajapat';

function App() {
  return (
    <div className="App">
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/students" element={<StudentSec />}></Route>
        {/* <Route path="/team" element={<Team/>}></Route> */}
        <Route path="/events" element={<Events />}></Route>
        <Route path="/strengths" element={<Strength />}></Route>
        <Route path="/reports" element={<Report />}></Route>
        <Route path="/portals" element={<Portal />}></Route>
        <Route path="/archive" element={<Archive />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/place" element={<Postu />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/postulates" element={<Postu />}></Route>
        <Route path="/pastteams" element={<PastTeams />}></Route>
        <Route path="/:link" element={<Show />}>
          {" "}
        </Route>
        <Route path="/team/:team" element={<Team />}>
          {" "}
        </Route>
        <Route path="/sandipan_mitra" element={<Sandipan_Mitra />}></Route>
        <Route path="/meet_saiya" element={<Meet_Saiya />}></Route>
        <Route path="/srajan_jain" element={<Srajan_Jain />}></Route>
        <Route path="/aditya_gupta" element={<Aditya_Gupta />}></Route>
        <Route path="/ayush_dwivedi" element={<Ayush_Dwivedi />}></Route>
        <Route path="/ajeet_kushwaha" element={<Ajeet_Kushwaha/>}></Route>
        <Route path="/ashish" element={<Ashish_Singh />}></Route>

        <Route path="/ankit" element={<Ankit />}></Route>
        <Route path="/aryaman" element={<Aryaman_Shandilya />}></Route>
        <Route path="/ashutosh" element={<Ashutosh_Ranjan />}></Route>
        <Route path="/chitwan" element={<Chitwan_Garg />}></Route>
        <Route path="/dishaa" element={<Dishaa_Rajora />}></Route>
        <Route path="/dishant" element={<Dishant_Parewa />}></Route>
        <Route path="/gaurav" element={<Gaurav_Kamboj />}></Route>
        <Route path="/gauravjiwan" element={<Gaurav_Jiwan />}></Route>
        <Route path="/himanshu" element={<Himanshu_Mishra />}></Route>
        <Route path="/jeetendra" element={<JeetendraKP />}></Route>
        <Route path="/krishan" element={<Krishan_Kumar />}></Route>
        <Route path="/krishna" element={<Krishna_Deo />}></Route>
        <Route path="/mradul" element={<Mradul_Chaudhary />}></Route>
        <Route path="/mudit" element={<Mudit_Kumar />}></Route>
        <Route path="/naman" element={<Naman_Jain />}></Route>
        <Route path="/neha" element={<Neha_Aggarwal />}></Route>
        <Route path="/piyush" element={<Piyush_Senwar />}></Route>
        <Route path="/Prajakta" element={<Prajakta_Kapre />}></Route>
        <Route path="/rahul" element={<Rahul_Gauriyar />}></Route>
        <Route path="/rajat" element={<Rajat_Ghoshal />}></Route>
        <Route path="/samyak" element={<Samyak_Jain />}></Route>
        <Route path="/samyak18" element={<Samyak_Jain_Y18 />}></Route>
        <Route path="/shashi" element={<Shashi_Shekhar />}></Route>
        <Route path="/shuaib" element={<Shuaib_Alam />}></Route>
        <Route path="/vineet" element={<Vineet_Shukla />}></Route>
        <Route path="/vishal" element={<Vishal_Agarwal />}></Route>
        <Route path="/yashkrit" element={<Yashkrit_Gupta />}></Route>
        <Route path="/yashvardhan" element={<Yashvardhan_Raizada />}></Route>
        <Route path="/narendra" element={<Narendra_prajapat />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
