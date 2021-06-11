import React, { useState, useEffect } from 'react';

import api from '../services/api';
import { Content } from './styles'

export default function Post() {
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
    loadComments(2);
  }, []);

  return (
    <>
      { comments.map((comment) => (
        <Content key={comment.id}>
          <strong>{comment.name}</strong>
          <span>{comment.body}</span>
        </Content>
      ))}
    </>
  );
}
