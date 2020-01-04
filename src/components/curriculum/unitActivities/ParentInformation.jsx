// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Component dependencies
import {Link} from 'react-router-dom';
import Icon from '../../common/Icon';


/***************************************/
// Component for the description of activities
/***********************************/
export default function ParentInformation(props) {
  const unit = props.unit;
  const display = list.map((item, i) => {
    return(
      <PlainLink to={'/' + item.link + unit} key={i}>
        <Item>
          <Icon icon={item.icon}/>
          <Text>{item.text}</Text>
        </Item>
      </PlainLink>
    )
  })
  return(
    <Container>
      <List>
        {display}        
      </List>
    </Container>
  )
}

// Constants
const list = [
  {
    link: 'book?parent-',
    icon: "text",
    text: "Parent Informational"
  },
  {
    link: 'book-recommendations?',
    icon: 'reader',
    text: 'Book Recommendations'
  }
]

// Styling
const Container = styled.div`
  font-size: 25px;
`

const List = styled.ul`
  margin: 10px 10px 10px 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
`

const PlainLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const Item = styled.li`
  display:inline-flex;
  margin-bottom:10px;
  padding: 10px;
  border-radius: 10px;

  :hover{
    background-color: lightgray;
  }
`

const Text = styled.div`

`
