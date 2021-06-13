import produce from 'immer';

const INITIAL_STATE = {
  id: null,
  body: null,
  title: null,
  userId: null
};

export default function post(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@post/POST_SET': {
        draft.id = action.payload.id;
        draft.body = action.payload.body;
        draft.title = action.payload.title;
        draft.userId = action.payload.userId;
        draft.username = action.payload.username;
        draft.img = action.payload.img;
        break;
      }
      default:
    }
  });
}
