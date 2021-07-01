import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Squads from "./Components/squads"

import Home from './Components/home';

function App() {
  return (
    <div className="App">
      <Router>
        <switch>
          <Route component={Home} exact path="/home"/>
          <Route component={Squads} exact path="/squads"/>
        </switch>
      </Router>

    </div>
  );
}

export default App;
