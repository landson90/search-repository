import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Repository from '../Respository/index';
import Dashboard from '../Dashboard/index';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/respository' component={Repository} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;