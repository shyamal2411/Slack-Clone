import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
     <Router>
      <>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
          {/* <h1>This is the home page</h1> */}
            <Header />
          </Route>
        </Switch>
      </>
    </Router>
    </div> 
  );
}

export default App;