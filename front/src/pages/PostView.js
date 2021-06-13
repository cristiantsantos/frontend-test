import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import history from '../services/history';
import { commentSet } from '../store/modules/comment/actions';

import Post from '../components/Post';
import Comment from '../components/Comment'
import NewComment from '../components/NewComment'

export default function PostView() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const comments = useSelector((state) => state.comment.comments);

  useEffect(() => {
    async function loadComments(postId) {
      dispatch(commentSet(postId));
    }
    loadComments(post.id);
  }, [post.id, dispatch]);

  function handleReturn() {
    history.goBack(1);
  }

  return (
    <>
      <button type="button" onClick={() => handleReturn()}>Retornar</button>
      <Post posts={[post]} view />
      <NewComment comments={comments} />
      <Comment comments={comments} />
    </>
  );
}
