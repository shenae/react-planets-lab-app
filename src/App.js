import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom'
import Home from './components/Home'
import PlanetList from './components/PlanetList'

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/planets">Planets</Link>
          </li>
        </nav>

        <main>
          <Route exact path="/" component={Home} />
          <Route path="/planets" component={PlanetList} />
        </main>
      </div>
    );
  }
}

export default App;
