// Package dependencies
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCaretDown } from 'react-icons/fa';

// File dependencies
import Unit from './Unit';
import NewUnit from './NewUnit';

// Data dependencies
import unitDetails from 'Data/unitDetails.json';

// Component
export default function UnitList() {
  const [open, setOpen] = useState(false);
  const unitArr = Object.keys(unitDetails).map((key) => (
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
        <FaCaretDown style={{ marginLeft: '10px' }} />
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
  ;
  font-size: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
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
