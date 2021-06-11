import React, { useState, useEffect } from 'react';

import api from '../services/api';

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
        <h1 key={comment.id}>
          {comment.name} -
          {comment.body}
        </h1>
      ))}
    </>
  );
}
