import { Container, Form, Avatar } from "./style";

import { RiArrowLeftLine } from 'react-icons/ri'
import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {

  return (
    <Container>
      <header>
        <a href="/">
          <RiArrowLeftLine />
        </a>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/giuliaGuerreiro.png" alt="Imagem do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <Input
          type="text"
          icon={FiUser}
          value="Giulia Guerreiro"
          placeholder="Nome"
        />

        <Input
          type="email"
          icon={FiMail}
          value="giulia@email.com"
          placeholder="Nome"
        />

        <Input
          type="password"
          icon={FiLock}
          placeholder="Senha antiga"
        />

        <Input
          type="password"
          icon={FiLock}
          placeholder="Nova senha"
        />

        <Button title="Salvar" />

      </Form>

    </Container>
  )
}