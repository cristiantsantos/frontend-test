import React, { useState, useEffect } from 'react';

import api from '../services/api';
import { Content } from './styles'

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
        <Content key={post.id}>
          <span>{post.userId}</span>
          <strong>{post.title}</strong>
          <span>{post.body}</span>
        </Content>
      ))}
    </>
  );
}
