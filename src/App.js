import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Components/home';

function App() {
  return (
    <div className="App">
      <Router>
        <switch>
          <Route component={Home} exact path="/home"/>
        </switch>
      </Router>

    </div>
  );
}

export default App;
