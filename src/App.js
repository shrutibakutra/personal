import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainNav } from './Navigation/nav';
import { AboutMe } from './AboutMe/aboutme';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import { Work } from './Work/work';

function App() {
  return (
    <div className='App'>
      <MainNav />
      <HashRouter basename='/' >
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </HashRouter >
    </div>
  );
}

export default App;
