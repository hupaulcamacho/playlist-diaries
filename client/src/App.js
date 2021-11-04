import logo from './logo.svg';
import './App.css';
// utilities import
import { Route, Switch } from 'react-router-dom';

// component import
import Home from './components/home';
import Navigation from './components/navigation';
import Songs from './components/songs';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/songs' component={Songs} />
      </Switch>
      <footer></footer>
    </div>
  );
}

export default App;
