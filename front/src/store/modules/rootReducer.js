import { combineReducers } from 'redux';

import post from './post/reducer';
import comment from './comment/reducer';
import allposts from './allposts/reducer';

export default combineReducers({
  post,
  comment,
  allposts
});
