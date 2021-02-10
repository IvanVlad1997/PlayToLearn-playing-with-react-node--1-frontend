import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Doodle from "./pages/doodle";

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Doodle} />

      </Switch>

  );
}

export default App;
