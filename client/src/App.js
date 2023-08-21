import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import './App.css';
import Incio from './pages/Incio';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/';

function App() {
  
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Incio} /> 
    </Switch>
    </BrowserRouter>
  );
}

export default App;
