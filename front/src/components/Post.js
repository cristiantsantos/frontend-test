import React from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import LazyLoad from 'react-lazyload';
import { postSet } from '../store/modules/post/actions';
import { postDelete } from '../store/modules/allposts/actions';
import history from '../services/history';

import { ContainerPost, ListPost } from '../pages/styles';

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
    <ContainerPost>
      {!posts ? null :
        <ListPost>
          { posts.map((post) => (
            <Form key={post.id}>
              <LazyLoad height={200} once>
                <img alt="imagem" src={post.img} />
              </LazyLoad>
              <span>Autor: {post.username}</span>
              <strong>{post.title}</strong>
              <span>{post.body}</span>
              <ul>
                {view ? null : <button onClick={() => handlePostView(post)}>Detalhes</button>}
                {view ? null : <button type="button" onClick={(e) => handleDelete(post.id)}>Excluir</button>}
              </ul>
            </Form>
          ))}
        </ListPost>
      }
    </ContainerPost>
  );
}
