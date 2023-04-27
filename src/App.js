import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainNav } from './Navigation/nav';
import { AboutMe } from './AboutMe/aboutme';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Work } from './Work/work';


function App() {
  return (
    <div className='App'>
      {/* <MainNav /> */}
      {/* 
      <Router>
        <Routes basename='/'>
          <Route path="/" element={<AboutMe />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </Router> */}



      <BrowserRouter basename="/">
        <MainNav />
        <div>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route exact path="/work" element={<Work />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
