import styled, { keyframes } from 'styled-components';
import { media } from './constants/mediaSizes';

export const Wrapper = styled.div`
  padding: 3% 0;
  display: flex;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  margin-bottom: 10%;

  ${media.tablet`
    height: 100%;
    margin-bottom: 0;
  `};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #3498db;
  width: 50px;
  height: 50px;
  -webkit-animation: ${spin} 2s linear infinite;
  animation: ${spin} 2s linear infinite;
`;

export const Heading = styled.h1`
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 2px 2px 2px rgba(68,68,68,0.2);
  font-size: 30px;
  min-width: 60%;
  display: none;

  ${media.tablet`font-size: 40px; display: block;`};
`;

