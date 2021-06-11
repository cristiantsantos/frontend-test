import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import api from '../services/api';
import { Content } from './styles'
import { postSet } from '../store/modules/post/actions';
import history from '../services/history'

export default function Main() {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  //const profile = useSelector((state) => state.post);

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


  function handleClick(id) {

    // eslint-disable-next-line eqeqeq
    const postFilter = posts.filter(x => x.id == id)[0]
    dispatch(postSet(postFilter))
    history.push('/post')
  }

  return (
    <>
      { posts.map((post) => (
        <Content aaa key={post.id}
          >
          <span>Autor: {post.userId}</span>
          <strong value={post.id}>{post.title}</strong>
          <span>{post.body}</span>
          <button
            onClick={(e) => handleClick(e.target.value)}
            value={post.id} >
              Comentários
          </button>
        </Content>
      ))}
    </>
  );
}
