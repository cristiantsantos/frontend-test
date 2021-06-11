


export function commentSet({ postId, id, name, email, body }) {
  return {
    type: '@comment/COMMENT_SET',
    payload: { postId, id, name, email, body },
  };
}
export function commentSetSuccess(postId, id, name, email, body) {
  return {
    type: '@comment/COMMENT_SET_SUCCESS',
    payload: { postId, id, name, email, body },
  };
}
