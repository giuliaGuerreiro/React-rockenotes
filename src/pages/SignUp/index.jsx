import { Container, Form, BgImage } from "./styles";
import { FiMail, FiLock, FiUser } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

export function SignUp() {
  
  return (
    <Container>
      <BgImage />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Cadastrar" />

        <ButtonText title="Voltar para o login" isActive />

      </Form>


    </Container>
  )
}