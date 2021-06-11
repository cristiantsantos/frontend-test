import styled from 'styled-components';

export const Content = styled.div`

max-width: 400px;
margin: 20px;
border-radius: 10px;
padding: 2px;

background: red;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
&:hover {
  opacity: 0.8;
}

strong {
  font-size: 16px;
}
span {
  font-size: 14px;
}
button {
  cursor:pointer;
}

`;
