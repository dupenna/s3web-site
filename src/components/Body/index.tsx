import Logo from '../../assets/logo.svg';
import { Container, Header, LogoImage } from './styles';

const Body = () => {
  return (
    <Container>
      <Header>Soluções Simples e Inteligentes para sua Empresa!</Header>
      <LogoImage src={Logo} />
    </Container>
  )
}

export default Body;