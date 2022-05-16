import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Squads from "./Components/squad/squads"
import PlayerList from "./Components/playerList/playerList"
import Home from './Components/home/home';
import Transactions from './Components/transactions/transactions';
import Matches from './Components/matches/matches';
import PlayerListAdmin from './Components/playerList/playerListAdmin';
import TransactionsAdmin from './Components/transfer/transfersAdmin';
import LeagueTable from './Components/leagueTable/leagueTable';
import MatchesAdmin from './Components/matches/matchesAdmin';
import Login from './Components/login/login';
import Auction from './Components/auction/auction';
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
          <Route component={MatchesAdmin} exact path="/matchesAdmin"/>
        </switch>
        <switch>
          <Route component={Auction} exact path="/auction"/>
        </switch>
        <switch>
          <Route component={Login} exact path="/"/>
        </switch>
      </Router>

    </div>
  );
}

export default App;
