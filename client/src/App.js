// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// //import './App.css';
// import Inicio from './pages/Inicio';
// import axios from 'axios';
// axios.defaults.baseURL = 'https://economia-dq5t.vercel.app/';

// function App() {
  
//   return (
//     <BrowserRouter>
//     <Switch>
//       <Route exact path="/" component={Inicio} /> 
//     </Switch>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Incio from './pages/Inicio';
import MercadoBlue from './pages/MercadoBlue';
import axios from 'axios';

function App() {
  // Define la URL base en función de la ruta actual
  if (window.location.hostname === 'localhost') {
    axios.defaults.baseURL = 'http://localhost:3001';
  } else {
    axios.defaults.baseURL = 'https://economia-dq5t.vercel.app/';
  }
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Incio} /> 
        <Route exact path="/MercadoBlue" component={MercadoBlue} /> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
