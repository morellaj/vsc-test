// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Component dependencies
import CategoryInformation from './CategoryInformation';

/***************************************/
// Component for the description of activities
/***********************************/
export default function ActivityDisplay(props) {
  return(
    <ActivityGroup>
      <GroupHeader>
        <div>{props.text}</div>
        <CategoryInformation text={props.categoryText}/>
      </GroupHeader>
      <Activities>{props.activities}</Activities>
    </ActivityGroup>
  )
}

// Styling
const ActivityGroup = styled.div`
  display: inline-block;
  margin: 20px;
  border-radius: 5px;
  background-color: white;
`

const GroupHeader = styled.div`
  display: flex;
  margin: 10px;
  font-size: 36px;
  border-bottom: 1px solid ${props => props.theme.color}
`

const Activities = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
`
