import React from 'react';

import Input from '../components/Input';
import { Content } from '../pages/styles'

export default function Post({ post }) {


  return (
    <>
      <Content>
          <span>Nova Postagem</span>
          <Input name="userId" placeholder="Autor" />
          <Input name="title" placeholder="Título" />
          <Input name="body" placeholder="Descrição" />
        </Content>
          <button type="submit">
            Enviar Post
          </button>
    </>
  );
}
