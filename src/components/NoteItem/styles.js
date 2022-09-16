import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 5.6rem;

  background: ${ ({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  border: ${ ({ theme, isNew }) => isNew ? `3px dashed ${theme.COLORS.GRAY_300}` : "none" };
  border-radius: 10px;


  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 1.6rem;
  margin-bottom: 2rem;

  > input {
    width: 100%;
    height: 4rem;

    background: transparent;
    border: none;

    outline: none;

    color: ${ ({ theme }) => theme.COLORS.WHITE};

    &:placeholder {
      color: ${ ({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > button {
    background: none;
    border: none;

    svg {
      font-size: 2rem;
      color: ${ ({ theme, isNew }) => isNew ? theme.COLORS.ORANGE : theme.COLORS.RED};
    }
  }

  .button-add {
    color: ${ ({ theme }) => theme.COLORS.ORANGE};
  }

  .button-delete {
    color: ${ ({ theme }) => theme.COLORS.ORANGE};
  }
`;