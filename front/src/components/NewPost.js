import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import { postAdd } from '../store/modules/allposts/actions';

import Input from '../components/Input';
import NewPostForm from '../validations/NewPostForm';
import { ContainerPost, ListPost } from '../pages/styles';

export default function Post({ posts }) {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  async function handleNewPost(post) {
    const validateSchema = await NewPostForm(post);
    if (validateSchema === true) {
      dispatch(postAdd(posts, post));
      formRef.current.setErrors({});
      formRef.current.setData({
        username: '',
        title: '',
        body: '',
      });
    } else {
      formRef.current.setErrors(validateSchema);
    }
  }

  return (
    <ContainerPost>
      <ListPost>
        <Form ref={formRef} onSubmit={handleNewPost}>
          <span>Nova Postagem</span>
          <Input name="username" placeholder="Autor" />
          <Input name="title" placeholder="Título" />
          <Input name="body" placeholder="Descrição" />
          <button type="submit">Enviar Post</button>
        </Form>
      </ListPost>
    </ContainerPost>
  );
}
