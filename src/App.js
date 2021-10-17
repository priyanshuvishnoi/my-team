import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Team from './components/Teams';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/teams" component={Team} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
