import React from 'react';
import Fetch from './services/fetch';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../src/pages/home';
import Favorites from '../src/pages/favorites';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={"/"} component={Home} exact />
          <Route path={"/favorites"} component={Favorites} />
        </Switch>
      </BrowserRouter>
      <Fetch />

    </div>
  );
}

export default App;
