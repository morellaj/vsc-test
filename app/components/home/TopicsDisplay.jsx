// Package dependencies
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

// Component dependencies
import Topic from './Topic';

/************************************************/
// Component for displaying the home page
/************************************************/
export default function TopicsDisplay(props){ 
  const list = topicList.map((topic, i) => {
    if(topic.status == "Available"){
      return (
        <Link to={"/units?" + topic.text.replace(/\s+/g, '-').toLowerCase()} key={i}>
          <Topic topic={topic}/>
        </Link>
    )}
    else {
      return <Topic topic={topic} key={i}/>
    }
  })
  
  return (
    <Container>
      <DisplayContainer>
        {list}
      </DisplayContainer>
    </Container>
  );
}

// Constants
const topicList = [
  {
    text: 'Hurting Others',
    status: "Available"
  },
  {
    text: 'Critical Thinking',
    status: "Available"
  },
  {
    text: 'Honesty',
    status: "Available"
  },
  {
    text: 'Thinking for Yourself',
    status: "Date TBD"
  },
  {
    text: 'Anger',
    status: "Date TBD"
  },
  {
    text: 'Sharing',
    status: "Date TBD"
  },
  {
    text: 'Gratitude',
    status: "Date TBD"
  },
  {
    text: 'Caring',
    status: "Date TBD"
  },
  {
    text: 'Making the World a Better Place',
    status: "Date TBD"
  },
  {
    text: 'Diversity',
    status: "Date TBD"
  }
]

// Styling

const Container = styled.section`
  display: flex;
  justify-content: center;
`

const DisplayContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 50px;
`