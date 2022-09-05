import { Container, Content, Links } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'

export function Details() {

  return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum officiis quibusdam similique laudantium suscipit, exercitationem tempore esse amet, ea nisi placeat dolore dolores quisquam consectetur blanditiis quasi modi? Placeat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, earum voluptatem doloribus, eveniet quibusdam quod minus consectetur explicabo debitis inventore corporis maxime cupiditate perferendis. Commodi atque optio labore in? Vel.</p>

          <Section title="Links úteis">
            <Links>
              <li><a href="https://rocketseat.com.br" target="_blank" >https://rocketseat.com.br</a></li>
              <li><a href="https://rocketseat.com.br" target="_blank" >https://rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores" >
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />

        </Content>
      </main>



    </Container>
  )
}