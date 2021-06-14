import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`

max-width: 900px;
margin: 20px;
border-radius: 10px;
padding: 2px;
background: linear-gradient(-90deg, blue, #333);
button {
  cursor: pointer;
  margin: 10px;
  background: #FF4500;
  border: 0;
  height: 30px;
  width: 100px;
  border-radius: 4px;
  transition: background 0.2s;
  &:hover {
    background: ${darken(0.05, '#FF4500')}
  }
}

`;

export const ContainerPost = styled.div`

list-style: none;
max-width: 900px;
border-radius: 10px;
padding: 2px;
background: linear-gradient(-90deg, blue, #333);
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;
export const ContainerComment = styled.div`

list-style: none;
max-width: 900px;
border-radius: 10px;
padding: 2px;
background: linear-gradient(-90deg, grey, #333);
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

export const ListPost = styled.li`

width: 100%;
Form {
  list-style: none;
  max-width: 900px;
  margin: 20px;
  border-radius: 10px;
  padding: 2px;
  background: #ddd9ce;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  img {
    width: 200px;
  }

input {
  padding: 2px;
  border-radius: 10px;
  margin: 3px;
  height: 25px;
  width: 250px;
}
  button {
    cursor: pointer;
    margin: 10px;
    background: #3b9eff;
    border: 0;
    height: 30px;
    width: 100px;
    border-radius: 4px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.05, '#3b9eff')}
    }
  }
}

`;
