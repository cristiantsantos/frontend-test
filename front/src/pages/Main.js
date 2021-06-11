import React, { useState, useEffect } from 'react';

import api from '../services/api';

export default function Main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (err) {
      }
    }
    loadPosts();
  }, []);

  return (
    <>
      { posts.map((post) => (
        <h1 key={post.id}>
          {post.userId} -
          {post.title} -
          {post.body}
        </h1>
      ))}
    </>
  );
}
