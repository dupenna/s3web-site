import Body from '../Body';
import Contact from '../Contact';
import Wave from '../Wave';
import { Container, Main } from './styles';

const App = () => {
  return (
    <Container>
      <Main>
        <Body />
        <Contact />
      </Main>

      <Wave />

    </Container>
  )
}

export default App
