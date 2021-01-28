import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: Boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`

  margin-top: 40px;
  max-width: 700px;
  display: flex;
  
  input{
    flex: 1;
    height: 40px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    border: 2px solid #ffff;
    border-right: 0;
    
    ${(props) => props.hasError && css`
      border-color: #c53030;
    `}

  }

  button {
    width: 210px;
    height: 40px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repository = styled.div`

  margin-top: 20px;
  max-width: 700px;

  a {
    background: #ffff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    transition: transform 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    svg {
        margin-left: auto;
        color: #cbcbd6;
      }

    div{
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }

     

    }
   
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;