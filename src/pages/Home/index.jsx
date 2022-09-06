import { Container, Logo, Menu, Search, Content, NewNote } from "./styles";

import { FiPlus, FiSearch } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { Tag } from '../../components/Tag'

export function Home() {

  return (
    <Container>
      <Logo>
        <h1>Rocketnotes</h1>
      </Logo>

      <Header />

      <Menu>
        <li><ButtonText title="Todos" isActive /></li>
        <li><ButtonText title="Frontend" /></li>
        <li><ButtonText title="Node" /></li>
        <li><ButtonText title="React" /></li>
      </Menu>

      <Search>
        <Input icon={FiSearch} placeholder="Pesquisar pelo título" />
      </Search>

      <Content>
        <Section title="Minhas notas" >

          <Note data={
            {title: "React", 
              tags: [
                {id: "1", name: "react"},
                {id: "2", name: "express"},
                {id: "3", name: "vite"},
                {id: "4", name: "spa"},
                {id: "5", name: "icons"},
                {id: "6", name: "styled"},
                {id: "6", name: "tegx"},
                {id: "6", name: "tagy"},
              ]}} 
          />

          <Note data={
            {title: "Exemplo de Middleware", 
              tags: [
                {id: "1", name: "express"},
                {id: "2", name: "nodejs"}
              ]}} 
          />

        </Section>
      </Content>

      <NewNote>
        <FiPlus/>
        Criar nota
      </NewNote>

    </Container>
  )
}