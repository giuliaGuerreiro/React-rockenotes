import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin-bottom: 3rem;

  > h2 {
    font-size: 2rem;
    font-weight: normal;
    color: ${ ({ theme }) => theme.COLORS.GRAY_100 };
  
    border-bottom: ${ ({ theme }) => `1px solid ${theme.COLORS.BACKGROUND_700}` };
  
    padding-bottom: 1.6rem;
    margin-bottom: 2.4rem;
  }
`;