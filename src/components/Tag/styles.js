import styled from "styled-components";

export const Container = styled.span`
  width: 6.4rem;
  height: 2.4rem;

  padding: .5rem 1rem;
  margin-right: .6rem;

  background-color: ${ ({ theme }) => theme.COLORS.ORANGE };
  border: none;
  border-radius: 10px;

  font-size: 1.2rem;
  line-height: 1.4rem;
  font-weight: normal;
  color: ${ ({ theme }) => theme.COLORS.BACKGROUND_900 };
`;