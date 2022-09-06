import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 10.5rem;

  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 4rem;

  border-bottom: ${ ({ theme }) => `1px solid ${theme.COLORS.BACKGROUND_700}`};
`;

export const Profile = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  gap: 2rem;
  
  > img {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 1.4rem;
      color: ${ ({ theme }) => theme.COLORS.GRAY_100 };
    }

    strong {
      font-size: 1.8rem;
      color: ${ ({ theme }) => theme.COLORS.WHITE };
    }
  }
`;

export const Logout = styled.button`
  background: none;
  border: none;

  > svg {
    font-size: 3.6rem;
    color: ${ ({ theme }) => theme.COLORS.GRAY_100 };
  }
`;