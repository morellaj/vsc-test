// Package dependencies
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


// Component dependencies
import Unit from './Unit';
import Legend from './Legend';


/** ********************************************* */
// Component for displaying the unit list on curriculum pages
/** ********************************************* */
export default function UnitList(props) {
  const { unitList, unitSelected, setUnitSelected } = props;
  const unitArr = unitList.map((unit, i) => (
    <Unit
      unitSelected={unitSelected === i}
      num={i}
      title={unit.title}
      char={unit.unit.charAt(0)}
      setUnitSelected={setUnitSelected}
      key={unit.unit}
    />
  ));

  return (
    <Container>
      <Legend />
      {unitArr}
      <RequestText>Have a topic you want us to work on?   Submit it below!</RequestText>
    </Container>
  );
}

// Prop validation
UnitList.propTypes = {
  unitList: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
  unitSelected: PropTypes.number.isRequired,
  setUnitSelected: PropTypes.func.isRequired,
};


// Styling
const Container = styled.div`
  width: 200px;
  margin: 0 20px;
`;

const RequestText = styled.div`
  margin-top: 10px;
  font-weight: 700;
`;
