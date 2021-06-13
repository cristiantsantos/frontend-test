


export function commentSet(postId) {
  return {
    type: '@comment/COMMENT_SET',
    payload: { postId },
  };
}
export function commentSetSuccess(comments) {
  return {
    type: '@comment/COMMENT_SET_SUCCESS',
    payload: { comments },
  };
}

export function commentAdd(comments, comment) {
  return {
    type: '@comment/COMMENT_ADD',
    payload: { comments, comment } ,
  };
}
export function commentAddSuccess(newComments) {
  return {
    type: '@comment/COMMENT_ADD_SUCCESS',
    payload: { newComments },
  };
}
