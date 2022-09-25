import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
  @media (max-width: 1100px) {
    width: 50%;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`

export const ContactForm = styled.form`
  padding: 3rem;
  background: #F6F6F6;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  border-radius: 7px;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 1100px) {
    padding: 2rem;
  }
  @media (max-width: 800px) {
    padding: 1rem;
  }
  &:invalid button {
    background: #D3D3D3;
  }
`

export const Input = styled.input`
  background: #FFFFFF;
  border: 1px solid #D3D3D3;
  border-radius: 7px;
  padding: .8rem 1.2rem;
  font-family: 'Open sans';
  font-size: 20px;
  color: #666;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #BBB;
  }
  :-ms-input-placeholder {
    color: #BBB;
  }
  @media (max-width: 1100px) {
    padding: .5rem 1rem;
    font-size: 15px;
  }
`

export const Text = styled.textarea`
  background: #FFFFFF;
  border: 1px solid #D3D3D3;
  border-radius: 7px;
  padding: .5rem 1rem;
  font-family: 'Open sans';
  font-size: 20px;
  color: #666;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #BBB;
  }
  :-ms-input-placeholder {
    color: #BBB;
  }
  height: 6rem;
  @media (max-width: 1100px) {
    padding: .5rem 1rem;
    font-size: 15px;
  }
`

export const Button = styled.button`
  background: #36A541;
  color: white;
  padding: 1rem 1rem;
  border-radius: 7px;
  font-size: 20px;
  border: 0;
  cursor: pointer;
  @media (max-width: 1100px) {
    padding: .8rem;
    font-size: 15px;
  }
`
