import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    width: 100%;
    height: 14.4rem;
    background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_900 };

    padding: 4.7rem 14.4rem;

    display: flex;
    align-items: center;

    svg {
      font-size: 4rem;
      color: ${ ({ theme }) => theme.COLORS.GRAY_100 };
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 34rem;
  min-height: 50rem;

  margin-top: -9.5rem;

  > div:nth-child(4) {
    margin-top: 2rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
    
  margin-bottom: 4.4rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    bottom: 7px;
    right: 7px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${ ({ theme }) => theme.COLORS.ORANGE};
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;

    cursor: pointer;

    svg {
      font-size: 2.4rem;
      color: ${ ({ theme }) => theme.COLORS.BACKGROUND_800};
    }

    input {
      display: none;
    }
  }
`;