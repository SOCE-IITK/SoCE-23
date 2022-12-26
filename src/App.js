import Menubar from './Components/Menubar';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import StudentSec from './Components/Student_Section'
import Strength from './Components/Strength'
import Portal from './Components/Portal'
import Team from './Components/Team';
import Contact from './Components/Contact';
import Postu from './Components/Placement/postu';

function App() {
  return (
    <div className="App">
      <Menubar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/student" element={<StudentSec/>}></Route>
        <Route path="/team" element={<Team/>}></Route>
        <Route path="/strength" element={<Strength/>}></Route>
        <Route path="/portal" element={<Portal/>}></Route>
        <Route path="/place" element={<Postu/>}></Route>
        <Route path="/contact-us" element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
