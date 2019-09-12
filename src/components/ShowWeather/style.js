import styled from 'styled-components';
import { media } from '../../constants/mediaSizes';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: column;

  ${media.landscapedPhone`
    flex-direction: row;
  `};
`;

export const Today = styled.div`
  min-width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 20px;
`;

export const City = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 28px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  padding: 0px;
`;

export const Day = styled.p`
  font-size: ${props => props.large ? '18px' : '12px'};
  color: white;
  text-align: left;
  text-transform: lowercase;
`;

export const NextDays = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-flow: wrap;
  justify-content: center;

  ${media.landscapedPhone`
    flex-direction: row;
  `};
`;

export const Container = styled.div`
  display: flex;
  margin: 3px;
  padding:  10px 0px 5px 5px;
  background: rgba(255, 255, 255, 0.15);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: calc(50% - 6px);
  
  ${media.landscapedPhone`
    
    flex-basis: auto;
    padding:  10px;
  `};
  ${media.tablet`
    flex: 1;
    margin: 5px;
    padding: 20px 15px 5px 15px;
  `};
`;


export const WeatherState = styled.p`
  font-size: ${props => props.large ? '20px' : '12px'};
  color: white;
  text-transform: lowercase;

  ${media.landscapedPhone`
    font-size: ${props => props.large ? '20px' : '14px'};
  `};
`;

export const WeatherIcon = styled.img`
  width: 30px;
  margin-top: -10px;
  margin-bottom: 10px;
  
  ${media.landscapedPhone`
    width: 50px;
    margin: 0 auto;
    margin-top: 0;
    margin-bottom: 20px;
  `};
  ${media.tablet`
    width: 65px;
  `};
`;

export const Temperature = styled.h1`
  color: white;
  font-size: ${props => props.large ? '60px' : '18px'};

  ${media.tablet`
    font-size: ${props => props.large ? '60px' : '14px'};
  `};
  ${media.desktop`
    font-size: ${props => props.large ? '60px' : '16px'};
  `};
  ${media.largeDesktop`
    font-size: ${props => props.large ? '60px' : '18px'};
  `};
`;
