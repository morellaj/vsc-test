// Package dependencies
import React, {useEffect} from 'react';
import styled from 'styled-components';


// Component dependencies
import Unit from './Unit.jsx';
import Legend from './Legend.jsx';


/************************************************/
// Component for displaying the unit list on curriculum pages
/************************************************/
export default function UnitList(props) {
  const unitArr = props.unitList.map((unit, i) => {
    return <Unit 
      unitSelected={props.unitSelected == i}
      num={i}
      unit={unit}
      setUnitSelected={props.setUnitSelected} 
      setTab={props.setTab}
      key={i}/>
  });
  
  return (
    <Container>
      <Legend/>
      {unitArr}   
      <RequestText>Have a topic you want us to work on?   Submit it below!</RequestText>
    </Container>)
}


// Styling
const Container = styled.div`
  width: 200px;
  margin: 0 20px;
`

const RequestText = styled.div`
  margin-top: 10px;
  font-weight: 700;
`