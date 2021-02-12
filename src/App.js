import React, { component } from 'react';
import NavBar from './componentes/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './componentes/Index';
import './App.css';
import { ContextController } from './Context';

function App() {
  return (
    <ContextController>
    <Router>
      <>
      <NavBar/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
      </div>
      </>
    </Router>
    </ContextController>
  );
}

export default App;
