import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 10.5rem 18rem auto 8rem;
  grid-template-areas: 
  "logo header"
  "menu search"
  "menu content"
  "newnote content";

`;

export const Logo = styled.div`
  grid-area: logo;
  
  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: ${ ({ theme }) => `1px solid ${theme.COLORS.BACKGROUND_700}`};

  background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_900 };

  > h1 {
    font-size: 2.4rem;
    line-height: 3.1rem;
    font-weight: 700;
    color: ${ ({ theme }) => theme.COLORS.ORANGE };
  }
`;

export const Menu = styled.ul`
  grid-area: menu;
  
  background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_900};
  text-align: center;

  overflow-y: auto;

  > li:first-child {
    margin-top: 6.4rem;
  }

  > li {
    margin-bottom: 2.4rem;
  }
`;

export const Search = styled.div`
  grid-area: search;
  margin: 6.4rem;
`;  

export const Content = styled.div`
  grid-area: content;

  padding: 0 6.4rem 6.4rem;

  overflow-y: auto;
`;

export const NewNote = styled.button`
  grid-area: newnote;

  border: none;
  background-color: ${ ({ theme }) => theme.COLORS.ORANGE};
  color: ${ ({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  font-size: 2rem;
`;