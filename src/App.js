import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainNav } from './Navigation/nav';
import { AboutMe } from './AboutMe/aboutme';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Work } from './Work/work';

function App() {
  return (
    <div className='App'>
      <MainNav />
      <Router>
        <Routes>
          <Route path="/" element={<AboutMe />} /> 
          <Route path="/work" element={<Work />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
