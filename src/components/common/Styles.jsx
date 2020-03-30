// Package dependencies
import styled from 'styled-components';

export const colors = {
  M: {
    color: "darkred",
    title: "Matter",
    darkColor: "rgb(114, 0, 0)",
    lightColor: "rgb(165, 0, 0)"
  },
  L: {
    color: "darkgreen",
    title: "Life",
    darkColor: "rgb(0, 75, 0)",
    lightColor: "rgb(0, 126, 0)"
  },
  P: {
    color: "darkblue",
    title: "Physical Science",
    darkColor: "rgb(0, 0, 88)",
    lightColor: "rgb(0, 0, 190)"
  },
  E: {
    color: "darkorange",
    title: "Earth and Space",
    darkColor: "rgb(230, 126, 0)",
    lightColor: "rgb(255, 152, 26)"
  },
  LITS: {
    color: "rgb(1, 145, 218)",
    title: "Learning is the Solution",
    darkColor: "rgb(0, 125, 188)",
    lightColor: "rgb(52, 196, 255)"
  },
  I: {
    color: "rebeccapurple",
    title: "Individual",
    darkColor: "rgb(114, 0, 0)",
    lightColor: "rgb(165, 0, 0)"
  },
  S: {
    color: "orange",
    title: "Social",
    darkColor: "rgb(0, 75, 0)",
    lightColor: "rgb(0, 126, 0)"
  },
  C: {
    color: "limegreen",
    title: "Critical Thinking",
    darkColor: "rgb(0, 0, 88)",
    lightColor: "rgb(0, 0, 190)"
  }
};

export const shadow1 = `
border: 1px solid black;
box-shadow: 0 1px 1px black, 0 2px 5px rgba(0,0,0,0.6), 0 4px 10px rgba(0,0,0,0.2);
border-color: rgba(0,0,0,0.2) rgba(0,0,0,0.35) rgba(0,0,0,0.55);
border-bottom-width: 2px;
`;

export const shadow2 = `
box-shadow: 0 1px 2.5px rgba(0,0,0,0.5)
`;

export const darkBGHover = `
  transition: background-color .5s;
  :hover{
    background-color: ${colors.LITS.darkColor};
  }
`;

export const themeLITS = `
  color: white;
  background-color: ${colors.LITS.color}
`;

export const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexSpaceBetween = `
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Components
export const Heading = styled.h1`
  text-align: center;
  margin: 30px 0 0 0;
  font-size: 33px;
  padding: 0 10px;
  font-weight: 400;

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
  ${shadow1};
  ${themeLITS};
  padding: .66em .9em;
  border-radius: 5px;
  font-size: 1em;
  font-weight: 700;

  :hover{
    background-color: ${colors.LITS.darkColor}
  }
`;
