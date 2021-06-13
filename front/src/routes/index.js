import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Main from '../pages/Main';
import PostView from '../pages/PostView';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/post" component={PostView} />
    </Switch>
  );
}
