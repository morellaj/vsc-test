// Package dependencies
import React from 'react';
import styled from 'styled-components';


// Data files
import {colors} from '../../../master.json';


/************************************************/
// Component for displaying an individual unit on the unit list
/************************************************/
export default function Legend(props){
  
  return (
    <Container>
      Topic List
    </Container>
    )           
}


// Styling
const Container = styled.div`
  padding: 6px;
  margin: 2px 0;
  background-color: ${colors.LITS.color};
  color: white;
`