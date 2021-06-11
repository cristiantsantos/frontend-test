import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import api from '../services/api';
import { Content } from './styles';
import { postSet } from '../store/modules/post/actions';
import history from '../services/history';

import { Form } from '@unform/web';
import Input from '../components/Input';

import LazyLoad from 'react-lazyload';

export default function Main() {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const formRef = useRef(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await api.get('/posts');
        const imgPost = response.data.map(post => ({
          ...post,
          img: `https://avatars2.githubusercontent.com/u/${Math.floor(Math.random() * 300) + 1}?s=500`
        }))
        setPosts(imgPost);
      } catch (err) {
      }
    }
    loadPosts();
  }, []);
  function handlePostView(id) {
    // eslint-disable-next-line eqeqeq
    const postFilter = posts.filter((x) => x.id == id)[0];
    dispatch(postSet(postFilter));
    history.push('/post');
  }
  function handleNewPost(e) {
    setPosts([
      {
        id: posts.length + 1,
        img: `https://avatars2.githubusercontent.com/u/${Math.floor(Math.random() * 300) + 1}?s=500`,
        ...e,
      },
      ...posts,
    ]);
    formRef.current.setData({
      userId: '',
      title: '',
      body: '',
    });
  }

    function handleDelete(e) {
        setPosts(
          posts.filter(post => post.id !== e)
        )
    }

  return (
    <>
      <Form ref={formRef} onSubmit={handleNewPost}>
        <Content>
          <span>Nova Postagem</span>
          <Input name="userId" placeholder="Autor" />
          <Input name="title" placeholder="Título" />
          <Input name="body" placeholder="Descrição" />
          <button type="submit">
            Enviar Post
          </button>
        </Content>
      </Form>

      { posts.map((post) => (

        <Content key={post.id}>
          <LazyLoad height={200} once  >
            <img alt='imagem' src={post.img} />
          </LazyLoad>
          <span>Autor: {post.userId}</span>
          <strong value={post.id}>{post.title}</strong>
          <span>{post.body}</span>
          <button
            type='button'
            onClick={(e) => handlePostView(e.target.value)}
            value={post.id}
          >
            Detalhes
          </button>
          <button type='button' onClick={(e) => handleDelete(post.id)}>Excluir</button>
        </Content>
      ))}
    </>
  );
}
