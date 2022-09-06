import styled from "styled-components";
import bgImage from '../../assets/background.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: stretch;
  
`;

export const Form = styled.form`
  padding: 0 15rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;


  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    line-height: 6.3rem;
    font-weight: 700;
    }

  > p {
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: ${ ({ theme }) => theme.COLORS.GRAY_100};
  }

  > h2 {
    font-size: 2.4rem;
    color: ${ ({ theme }) => theme.COLORS.WHITE};
    line-height: 3.1rem;
    font-weight: 500;

    margin: 4.8rem 0;
  }

  > button:last-child {
    margin-top: 12.4rem;
  }
`;

export const BgImage = styled.div`
  flex: 1;
  background: url(${bgImage}) no-repeat center center;
  background-size: cover;

  opacity: 0.5;
`;