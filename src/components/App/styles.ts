import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(101.79deg, #df686b 4.47%, #7f0407 91.54%);
  height: 100vh;
  width: 100vw;
  display: flex;
  padding: 2rem 2rem 2rem 5rem;
  justify-content: center;
  @media (max-width: 800px) {
    padding: 2rem;
  }
`

export const Main = styled.main`
  height: 100%;
  width: 100%;
  max-width: 1400px;
  gap: 2rem;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
  }
`
