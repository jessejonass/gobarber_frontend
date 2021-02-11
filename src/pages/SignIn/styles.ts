import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch; // outros contents com 100vh
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 500px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    animation: ${appearFromLeft} 1s;

    h1 {
      margin-bottom: 24px;
    }
  }

  a {
    color: #fff;
    display: block;
    margin-top: 16px;
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 16px;
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
