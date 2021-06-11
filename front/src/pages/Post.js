import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import history from '../services/history'

import api from '../services/api';
import { Content } from './styles'

export default function Post() {
  const post = useSelector((state) => state.post);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function loadComments(postId) {
      try {
        const response = await api.get('/comments');
        const postFilter = response.data.filter(x => x.postId === postId)
        setComments(postFilter);
      } catch (err) {
      }
    }
    loadComments(post.id);
  }, [post.id]);

  function handleReturn() {
    history.goBack(1)
  }

  return (
    <>
      <button type='button' onClick={() => handleReturn()}>Retornar</button>

      <Content aaa key={post.id}
          >
            <strong>Post</strong>
            <span>{post.userId}</span>
            <strong value={post.id}>{post.title}</strong>
            <span>{post.body}</span>
        </Content>


      { comments.map((comment,_id) => (
        <Content key={comment.id}>
          <strong>Comentário {_id +1}</strong>
          <strong>Nome: {comment.name}</strong>
          <span>{comment.body}</span>
        </Content>
      ))}
    </>
  );
}
