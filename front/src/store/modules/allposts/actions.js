


export function allpostsSet(posts) {
  return {
    type: '@allposts/ALLPOSTS_SET',
    payload: { posts },
  };
}
export function allpostsSetSuccess(posts) {
  return {
    type: '@allposts/ALLPOSTS_SET_SUCCESS',
    payload: { posts },
  };
}


export function postDelete(posts, id) {
  return {
    type: '@allposts/ALLPOSTS_DELETE',
    payload: { posts, id } ,
  };
}
export function postDeleteSuccess(newPosts) {
  return {
    type: '@allposts/ALLPOSTS_DELETE_SUCCESS',
    payload: { newPosts },
  };
}
