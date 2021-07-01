import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Components/home';
import Transactions from './Components/transactions';

function App() {
  return (
    <div className="App">
      <Router>
        <switch>
          <Route component={Home} exact path="/home"/>
        </switch>
        <switch>
          <Route component={Transactions} exact path="/transactions"/>
        </switch>
      </Router>

    </div>
  );
}

export default App;
