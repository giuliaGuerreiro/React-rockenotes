import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  min-height: 11.2rem;

  border: none;
  border-radius: 10px;
  background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_700};

  padding: 1.6rem 2.2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;

  margin-bottom: 1.6rem;
  
  > h2 {
    font-size: 2.4rem;
    line-height: 3.1rem;
    font-weight: 700;
    color: ${ ({ theme }) => theme.COLORS.WHITE};
    text-align: left;
  }

  > footer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;