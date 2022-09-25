import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8rem;
  @media (max-width: 1100px) {
    width: 50%;
    gap: 4rem;
  }
  @media (max-width: 800px) {
    width: auto;
    height: auto;
    flex-direction: column-reverse;
    gap: 2rem;
  }
`

export const Header = styled.h1`
  color: white;
  font-size: 60px;
  @media (max-width: 1100px) {
    font-size: 40px;
  }
  @media (max-width: 800px) {
    font-size: 25px;
  }
`

export const LogoImage = styled.img`
  width: 150px;
  @media (max-width: 1100px) {
    width: 100px;
  }
  @media (max-width: 800px) {
    margin: 0 auto;
  }
`
