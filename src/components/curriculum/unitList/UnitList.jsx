// Package dependencies
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


// Component dependencies
import colors from 'Colors';
import Unit from './Unit';


/** ********************************************* */
// Component for displaying the unit list on curriculum pages
/** ********************************************* */
export default function UnitList(props) {
  const { unitList, unitSelected, setUnitSelected } = props;
  const unitArr = unitList.map((unit, i) => (
    <Unit
      unitSelected={unitSelected == i}
      num={i}
      title={unit.title}
      char={unit.unit.charAt(0)}
      setUnitSelected={setUnitSelected}
      key={unit.unit}
    />
  ));

  return (
    <Container>
      {unitArr}
      <RequestText>
        <span>{'Have a topic you want us to work on next?  '}</span>
        <StyledLink to="/topic-recommendation">Click here!</StyledLink>
      </RequestText>
    </Container>
  );
}


// Styling
const Container = styled.div`
  width: 200px;
  margin: 0 20px;

  @media(max-width: 1200px){
    margin: 0 10px;
  }

  @media(max-width: 1000px) {
    display: flex;
    width: 730px;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;

const RequestText = styled.div`
  margin-top: 10px;

  @media(max-width: 1000px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  font-weight: 900;
  text-decoration: none;

  :hover {
    color: ${colors.LITS.darkColor};
  }
`;
