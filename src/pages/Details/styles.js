import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;

    overflow-y: auto;
  }

`;

export const Content = styled.div`
  max-width: 55rem;
  margin: 6.5rem auto 0;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end;
  }

  > h1 {
    font-size: 3.6rem;
    font-weight: 500;

    margin: 6.4rem 0 1.6rem;
  }

  > p {
    text-align: justify;
    font-size: 1.6rem;
    font-weight: normal;

    margin-bottom: 5.4rem;
  }

  > button:last-child {
    margin: 12rem 0 9rem;
  }
`;

export const Links = styled.ul`
  list-style: none;
  
  > li { 
    margin-bottom: 1.2rem;
    
    a {
      color: ${ ({ theme }) => theme.COLORS.WHITE};
    }
  }
`;