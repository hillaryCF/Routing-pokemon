import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../../pages/home';
import Favorites from '../../pages/favorites';
import PokeInfo from '../pokeInfo/pokeInfo';

function Router() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path={"/"} component={Home} exact />
          <Route path={"/favorites"} component={Favorites} />
          <Route path={"/poke-info/:pokeindex"} component={PokeInfo} />
        </Switch>
      </BrowserRouter> 
  );
}

export default Router;
