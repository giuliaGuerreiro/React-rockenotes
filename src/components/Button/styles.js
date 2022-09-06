import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;

  padding: 1.7rem 0;
  text-align: center;

  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.1rem;
  color: ${ ({ theme }) => theme.COLORS.BACKGROUND_800};
  background-color: ${ ({ theme }) => theme.COLORS.ORANGE};

  border: none;
  border-radius: 10px;

  margin-top: 2.4rem;

  &:disabled {
    opacity: 0.5;
  }
`;