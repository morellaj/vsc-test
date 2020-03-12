// Package dependencies
import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Data dependencies
import colors from 'Colors';

// Component
export default function NewUnit() {
  return (
    <Container to="/topic-recommendation">
      <FaPlus style={{ marginRight: '10px' }} />
      Help us decide our next unit!
    </Container>
  );
}

// Styling
const Container = styled(Link)`
  margin-top: 2px;
  text-decoration: none;
  padding: 5px;
  border-radius: 1px;
  font-size: 19px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 3px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.LITS.color};
  position: relative;

  :hover {
    background-color: #D9D9D9;
  };
`;
