import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Squads from "./Components/squads"
import PlayerList from "./Components/playerList"
import Home from './Components/home';
import Transactions from './Components/transactions';
import Matches from './Components/matches';
import PlayerListAdmin from './Components/playerListAdmin';
import TransactionsAdmin from './Components/transfersAdmin';
import LeagueTable from './Components/leagueTable';
import MatchesAdmin from './Components/matchesAdmin';
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
        <switch>
          <Route component={PlayerListAdmin} exact path="/playerListAdmin"/>
        </switch>
        <switch>
          <Route component={TransactionsAdmin} exact path="/transactionsAdmin"/>
        </switch>
        <switch>
          <Route component={Matches} exact path="/matches"/>
        </switch>
        <switch>
          <Route component={LeagueTable} exact path="/league"/>
        </switch>
        <switch>
          <Route component={MatchesAdmin} exact path="/matchesAdminy7u7uyhjn"/>
        </switch>
      </Router>

    </div>
  );
}

export default App;
