import { Container, Profile, Logout } from './styles'

import { RiShutDownLine } from 'react-icons/ri'

export function Header() {

  return(
    <Container>
      <Profile>
        <img src="https://github.com/giuliaGuerreiro.png" alt="Imagem de usuário" />

        <div>
          <span>Bem vinda,</span>
          <strong>Giulia Guerreiro</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}