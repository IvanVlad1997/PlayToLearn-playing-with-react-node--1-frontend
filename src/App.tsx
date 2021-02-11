import React from 'react';
import './App.css';
import {Switch, Route, Link} from "react-router-dom";
import Doodle from "./pages/doodle";
import FirstPageComponent from "./pages/first-page";

function App() {
  return (
      <React.Fragment>
          <nav className="navbar navbar-light bg-dark">
              <Link to="/" className="navbar-brand mb-0 h1">Proiecte</Link>
          </nav>
          <Switch>
              <Route exact path="/canvas/:name" component={Doodle} />
              <Route exact path="/" component={FirstPageComponent} />
          </Switch>
      </React.Fragment>

  );
}

export default App;
