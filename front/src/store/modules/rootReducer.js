import { combineReducers } from 'redux';

import post from './post/reducer';
import comment from './comment/reducer';

export default combineReducers({
  post,
  comment
});
