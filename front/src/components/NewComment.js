import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import Input from '../components/Input';
import { commentAdd } from '../store/modules/comment/actions';

import { Content } from '../pages/styles';

export default function Comment({ comments }) {
  const formRef = useRef(null);
  const dispatch = useDispatch();

  function handleNewComment(comment) {
    dispatch(commentAdd(comments, comment));
    formRef.current.setData({
      name: '',
      body: '',
    });
  }

  return (
    <>
      <Form ref={formRef} onSubmit={handleNewComment}>
        <Content>
          <span>Novo Comentário</span>
          <Input name="name" placeholder="Nome" />
          <Input name="body" placeholder="Descrição" />
          <button type="submit">Enviar Comentário</button>
        </Content>
      </Form>
    </>
  );
}
