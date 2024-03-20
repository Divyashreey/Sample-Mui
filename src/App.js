import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DrawerAppBar from './DrawerAppBar';
import Products from './Products';
import About from './About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <DrawerAppBar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;