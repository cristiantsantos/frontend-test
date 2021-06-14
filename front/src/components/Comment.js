import React from 'react';

import { Form } from '@unform/web';
import { ContainerComment, ListPost } from '../pages/styles';

export default function Comment({ comments }) {
  return (
    <ContainerComment>
      {!comments ? null :
        <ListPost>
          { comments.map((comment, _id) => (
            <Form key={comment.id}>
              <strong>Comentário {_id + 1}</strong>
              <strong>Nome: {comment.name}</strong>
              <span>{comment.body}</span>
            </Form>
          ))}
        </ListPost>
      }
    </ContainerComment>
  );
}
