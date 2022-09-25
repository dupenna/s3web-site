import { Button, ContactForm, Container, Input, Text } from "./styles";

const Contact = () => {
  return (
    <Container>
      <ContactForm action="https://formsubmit.co/57967f0276b9450e9949fa16d096dcdc" method="POST">
        <Input required type={"hidden"} name="_subject" value={"S3Web - Formulário do site"} />
        <Input required type={"hidden"} name="_captcha" value={"false"} />

        <Input required type={"text"} name="Nome" placeholder="Seu nome..." />
        <Input required type={"email"} name="Email" placeholder="Seu e-mail..." />
        <Input required type={"text"} name="Empresa" placeholder="Sua empresa..." />
        <Text required name="Necessidade" placeholder="Descreva brevemente sua necessidade..."></Text>
        <Button>Enviar solicitação</Button>
      </ContactForm>
    </Container>
  )
}

export default Contact;