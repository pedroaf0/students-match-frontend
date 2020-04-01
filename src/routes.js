import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import home from './pages/home';
import profile from './pages/Profile';
import dev from './pages/dev';
import messagens from './pages/messagens';

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={dev} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={home} />
        <Route path="/profile" component={profile} />
        <Route path="/messagens" component={messagens} />
        <Route path="/Logon" component={Logon} />
      </Switch>
    </HashRouter>
  )
}