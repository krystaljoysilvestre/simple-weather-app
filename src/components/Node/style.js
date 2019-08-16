import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Node = styled.div`
  border: 1px solid #ccc;
  width: 300px;
  min-height: 100px;
  padding: 15px;
  font-size: 10px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 12px;
`;

export const VerticalArrow = styled.div`
  border: 1px solid #ccc;
  width: 1px;
  height: 15px;

  ${props =>
    props.top &&
    `&:before {
      content: '\\25b2';
      color: #ccc;
      font-size: 11px;
      margin-left: -5px;
    }`};

  ${props =>
    props.bottom &&
    `&:after {
      content: '\\25bc';
      color: #ccc;
      font-size: 11px;
      margin-left: -5px;
    }`};
`;

export const HorizontalArrow = styled.div`
  border: 1px solid #ccc;
  width: calc(25% + 2px);
`;

export const Level = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Child = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
