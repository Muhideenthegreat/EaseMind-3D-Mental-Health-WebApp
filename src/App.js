import './index.css';

import Navbar from './components/navbar'
import Home from './components/home'
import Scene from './components/scene'
import Relax from './components/relax'
import Ocean from './components/ocean'
import Progress from './components/progress'
import Profile from './components/profile'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path ="/home" element = {<Home/>} />
        <Route path ="/scene" element = {<Scene/>} />
        <Route path ="/relax" element = {<Relax/>} />
        <Route path ="/progress"  element = {<Progress/>} />
        <Route path ="/profile"  element = {<Profile/>} />
        <Route path="/ocean" element={<Ocean/>} />
      </Routes>
      
    </Router>
  );
}

export default App;