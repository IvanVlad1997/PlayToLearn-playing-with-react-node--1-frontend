import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Doodle from "./pages/doodle";
import FirstPageComponent from "./pages/first-page";

function App() {
  return (
      <Switch>
        <Route exact path="/canvas/:name" component={Doodle} />
        <Route exact path="/" component={FirstPageComponent} />
      </Switch>

  );
}

export default App;
