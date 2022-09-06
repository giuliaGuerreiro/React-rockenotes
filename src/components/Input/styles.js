import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${ ({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 10px;

  padding: 0 1.6rem;
  margin-bottom: .8rem;


  > input {
    width: 100%;
    height: 5.6rem;

    outline: none;

    background: none;

    border: none;

    font-size: 1.4rem;
    line-height: 1.8rem;


    color: ${ ({ theme }) => theme.COLORS.WHITE};

    &:placeholder {
      color: ${ ({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;