import React from 'react';

import { Content } from '../pages/styles';

export default function Comment({ comments }) {
  return (
    <>
      {!comments ? null :
        <>
          { comments.map((comment, _id) => (
            <Content key={comment.id}>
              <strong>Comentário {_id + 1}</strong>
              <strong>Nome: {comment.name}</strong>
              <span>{comment.body}</span>
            </Content>
          ))}
        </>
      }
    </>
  );
}
