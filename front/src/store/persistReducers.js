import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// eslint-disable-next-line import/no-anonymous-default-export
export default (reducers) => {
  const persistedReducer = persistReducer({
    key: 'frontend-test',
    storage,
    whitelist: ['post', 'comment', 'allposts'],

  }, reducers);
  return persistedReducer;
};
