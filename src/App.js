import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainNav } from './Navigation/nav';
import { AboutMe } from './AboutMe/aboutme';
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import { Work } from './Work/work';

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <MainNav />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route exact path="/work" element={<Work />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
