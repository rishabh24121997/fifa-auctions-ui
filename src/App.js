import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Squads from "./Components/squads"
import PlayerList from "./Components/playerList"
import Home from './Components/home';
import Transactions from './Components/transactions';
require('dotenv').config()

function App() {
  return (
    <div className="App">
      <Router>
        <switch>
          <Route component={Home} exact path="/home"/>
          <Route component={Squads} exact path="/squads"/>
        </switch>
        <switch>
          <Route component={Transactions} exact path="/transactions"/>
        </switch>
        <switch>
          <Route component={PlayerList} exact path="/playerList"/>
        </switch>
      </Router>

    </div>
  );
}

export default App;
