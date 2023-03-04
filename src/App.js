import Menubar from './Components/Menubar';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Team from './Components/Team'
import Events from './Components/Events'
function App() {
  return (
    <div className="App">
      <Menubar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/team" element={<Team/>}></Route>
        <Route path="/events" element={<Events/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
