import React from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import LazyLoad from 'react-lazyload';
import { postSet } from '../store/modules/post/actions';
import { postDelete } from '../store/modules/allposts/actions';
import history from '../services/history';

import { Content } from '../pages/styles';

export default function Post({ posts, view }) {
  const dispatch = useDispatch();
  function handlePostView(post) {
    dispatch(postSet(post));
    history.push('/post');
  }

  function handleDelete(id) {
    dispatch(postDelete(posts, id));
  }

  return (
    <>
    {!posts ? null :
    <>
      { posts.map((post) => (
        <Form key={post.id}>
          <Content>
            <LazyLoad height={200} once>
              <img alt="imagem" src={post.img} />
            </LazyLoad>
            <span>Autor: {post.username}</span>
            <strong>{post.title}</strong>
            <span>{post.body}</span>
            {view? null : <button onClick={() => handlePostView(post)}>Detalhes</button>}
          </Content>
          {view? null : <button type="button" onClick={(e) => handleDelete(post.id)}>Excluir</button>}
        </Form>
      ))}
      </>
    }
    </>
  );
}
