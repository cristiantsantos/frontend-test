import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Post from './pages/Post';
import NewPost from './pages/NewPost';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/post" component={Post} />
        <Route path="/newpost" component={NewPost} />
      </Switch>
    </BrowserRouter>

  );
}
