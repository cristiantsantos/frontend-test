import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import Input from '../components/Input';
import { commentAdd } from '../store/modules/comment/actions';

import { Content } from '../pages/styles';
import NewCommentForm from '../validations/NewCommentForm';

export default function Comment({ comments }) {
  const formRef = useRef(null);
  const dispatch = useDispatch();

  async function handleNewComment(comment) {
    const validateSchema = await NewCommentForm(comment);
    if (validateSchema === true) {
      dispatch(commentAdd(comments, comment));
      formRef.current.setErrors({});
      formRef.current.setData({
        name: '',
        body: '',
      });
    } else {
      formRef.current.setErrors(validateSchema);
    }
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
