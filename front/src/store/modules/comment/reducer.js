import produce from 'immer';

const INITIAL_STATE = {
  postId: null,
  id: null,
  name: null,
  email: null,
  body: null
};

export default function comment(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@comment/COMMENT_SET': {
        break;
      }
      case '@comment/COMMENT_SET_SUCCESS': {
        draft.postId = action.payload.postId;
        draft.id = action.payload.id;
        draft.name = action.payload.name;
        draft.email = action.payload.email;
        draft.body = action.payload.body;
        break;
      }
      default:
    }
  });
}
