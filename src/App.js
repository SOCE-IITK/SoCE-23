import Menubar from './Components/Menubar';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import StudentSec from './Components/Student_Section'
import Postu from './Components/Placement/postu'
import Team from './Components/Team';
function App() {
  return (
    <div className="App">
      <Menubar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/student" element={<StudentSec/>}></Route>
        <Route path="/team" element={<Team/>}></Route>
        <Route path="/place" element={<Postu/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
