// Package dependencies
import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

// File dependencies
import Unit from './Unit';
import NewUnit from './NewUnit';

// Data dependencies
import character from 'Character';

// Component
export default function UnitList() {
  const [open, setOpen] = useState(false);
  const unitArr = Object.keys(character).map((key) => (
    <Unit
      unit={key}
      setOpen={setOpen}
      key={key}
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
