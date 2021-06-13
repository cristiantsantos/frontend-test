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
      case '@allposts/COMMENT_ADD': {
        break;
      }
      case '@comment/COMMENT_SET_SUCCESS': {
        draft.comments = action.payload.comments;
        break;
      }
      case '@comment/COMMENT_ADD_SUCCESS': {
        draft.comments = action.payload.newComments;
        break;
      }
      default:
    }
  });
}
