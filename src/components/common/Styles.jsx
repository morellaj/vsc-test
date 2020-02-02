import styled from 'styled-components';
import colors from 'Colors';

export const Heading = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 33px;
  padding: 0 3px;

  @media(max-width: 1050px){
    font-size: 28px;
  }

  @media(max-width: 900px){
    font-size: 24px;
  }

  @media(max-width: 500px){
    font-size: 16px;
  }
`;

export const test = 5;

export const Button = styled.div`
  padding: 1vw 1.4vw;
  border-radius: 5px;
  background-color: ${colors.LITS.color};
  font-size: 1.5vw;
  color: white;
  font-weight: 700;
  text-decoration:none;
  border: 1px solid black;
  box-shadow: 0 1px 1px black, 0 2px 5px rgba(0,0,0,0.6), 0 4px 10px rgba(0,0,0,0.2);
  border-color: rgba(0,0,0,0.2) rgba(0,0,0,0.35) rgba(0,0,0,0.55);
  border-bottom-width: 2px;

  @media(max-width: 1000px) {
    font-size: 14px;
    padding: 10px 15px;
  }

  @media(max-width: 500px) {
    font-size: 3.5vw;
    padding: 2vw 3vw;
  }

  :hover{
    background-color: ${colors.LITS.darkColor}
  }
`;
