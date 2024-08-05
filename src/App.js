import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainNav } from './Navigation/nav';
import { AboutMe } from './AboutMe/aboutme';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Work } from './Work/work';
import RedirectToHome from './RedirectToHome';

function App() {
  return (
    <div className='App'>
      <MainNav />
      <Router>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/work" element={<Work />} />
          <Route path="*" element={<RedirectToHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
