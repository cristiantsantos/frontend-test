import produce from 'immer';

const INITIAL_STATE = {
  posts: null,
};

export default function allposts(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@allposts/ALLPOSTS_SET': {
        break;
      }
      case '@allposts/ALLPOSTS_DELETE': {
        break;
      }
      case '@allposts/ALLPOSTS_ADD': {
        break;
      }
      case '@allposts/ALLPOSTS_SET_SUCCESS': {
        draft.posts = action.payload.posts;
        break;
      }
      case '@allposts/ALLPOSTS_DELETE_SUCCESS': {
        draft.posts = action.payload.newPosts;
        break;
      }
      case '@allposts/ALLPOSTS_ADD_SUCCESS': {
        draft.posts = action.payload.newPosts;
        break;
      }
      default:
    }
  });
}
