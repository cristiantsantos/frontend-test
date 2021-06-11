import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Main from '../pages/Main';
import Post from '../pages/Post';
import NewPost from '../pages/NewPost';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/post" component={Post} />
      <Route path="/newpost" component={NewPost} isPrivate />
    </Switch>
  );
}
