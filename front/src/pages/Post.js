import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import history from '../services/history';

import api from '../services/api';
import { Content } from './styles';

import { Form } from '@unform/web';
import Input from '../components/Input';

export default function Post() {
  const post = useSelector((state) => state.post);
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState([]);
  const formRef = useRef(null);


  useEffect(() => {
    async function loadComments(postId) {
      try {
        const responseComment = await api.get('/comments');
        const postFilter = responseComment.data.filter((x) => x.postId === postId);
        setComments(postFilter);

        const responseUser = await api.get(`/users/${post.userId}`);
        setUser(responseUser.data.username);
      } catch (err) {
      }
    }
    loadComments(post.id);
  }, [post.id, post.userId]);

  function handleReturn() {
    history.goBack(1);
  }
  function handleNewComment(e) {
    setComments([
      ...comments,
      {
        id: comments.length + 1,
        ...e,
      },
    ]);
    formRef.current.setData({
      name: '',
      body: '',
    });
  }


  return (
    <>
      <button type="button" onClick={() => handleReturn()}>Retornar</button>

      <Content key={post.id}>
        <strong>Post</strong>
        <img alt='imagem'
            src={post.img}
          />
        <span>
          username: {user}
        </span>
        <strong value={post.id}>{post.title}</strong>
        <span>{post.body}</span>
      </Content>

      <Form ref={formRef} onSubmit={handleNewComment}>
        <Content>
          <span>Novo Comentário</span>
          <Input name="name" placeholder="Nome" />
          <Input name="body" placeholder="Descrição" />
          <button type="submit">
            Enviar Post
          </button>
        </Content>
      </Form>

      { comments.map((comment, _id) => (
        <Content key={comment.id}>
          <strong>
            Comentário {_id + 1}
          </strong>
          <strong>
            Nome: {comment.name}
          </strong>
          <span>{comment.body}</span>
        </Content>
      ))}
    </>
  );
}
