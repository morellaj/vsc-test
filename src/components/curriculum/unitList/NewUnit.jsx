// Package dependencies
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import colors from 'Colors';
import { Link } from 'react-router-dom';

/** ********************************************* */
// Component for displaying an individual unit on the unit list
/** ********************************************* */
export default function Unit() {
  return (
    <Container to="/topic-recommendation">
      <FontAwesomeIcon icon={faPlus} style={{ marginRight: '10px' }} />
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
  text-align: center;
  color: ${colors.LITS.color};
  position: relative;

  :hover {
    background-color: #D9D9D9;
  };
`;
