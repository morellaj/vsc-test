// Package dependencies
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


// Component dependencies
import Unit from './Unit';
import NewUnit from './NewUnit';

/** ********************************************* */
// Component for displaying the unit list on curriculum pages
/** ********************************************* */
export default function UnitList(props) {
  const [open, setOpen] = useState(false);
  const { unitList, unitSelected, setUnitSelected } = props;
  const unitArr = unitList.map((unit, i) => (
    <Unit
      unitSelected={parseInt(unitSelected) === i}
      num={i}
      title={unit.title}
      char={unit.unit.charAt(0)}
      setUnitSelected={setUnitSelected}
      setOpen={setOpen}
      key={unit.unit}
    />
  ));

  unitArr.push(<NewUnit key="new" />);

  return (
    <Container>
      <Select onClick={() => setOpen(!open)}>
        Select a Topic
        <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: '10px' }} />
      </Select>
      <TopicList open={open}>
        {unitArr}
      </TopicList>
    </Container>
  );
}


// Styling
const Container = styled.nav`
  width: 100%;
  margin-bottom: 20px;
`;

const Select = styled.div`
  background-color: white;
  border-radius: 5px;
  font-size: 19px;
  text-align: center;
  padding: 5px;
  cursor: pointer;

  :hover {
    color: darkgray;
  }
`;

const TopicList = styled.div`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-direction: column;
`;
