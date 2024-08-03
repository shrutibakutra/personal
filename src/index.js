import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <footer className='footer'>
      <div className='footer__content'>
        <div> <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:shruti15bakutra@gmail.com">shruti15bakutra@gmail.com</a></div>
        <div><FontAwesomeIcon icon={faHouse} /> Challex, France</div>
        <div><i class="fab fa-linkedin-in"></i><a href='https://www.linkedin.com/in/shruti-bakutra-037829156/'> https://www.linkedin.com/in/shruti-bakutra-037829156/</a></div>
      </div>
    </footer>
  </React.StrictMode>
);

reportWebVitals();
