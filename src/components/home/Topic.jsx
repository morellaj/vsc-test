// Package dependencies
import React from 'react';
import styled from 'styled-components';


/************************************************/
// Component for displaying the home page
/************************************************/
export default function Topic(props){ 
  const unit = props.topic.text.replace(/\s+/g, '-').toLowerCase();
  return (
    <Container>
      <Image src={"./assets/" + unit + "1.jpg"} status={props.topic.status}/>
      <TextContainer>
        <Title>{props.topic.text}</Title>
        <Status status={props.topic.status}>{props.topic.status}</Status>
      </TextContainer>
    </Container>
  );
}

// Styling
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 30px 20px;
  border-radius: 20px;
  width: 250px;
  height: 250px;
  box-shadow: 0 0 20px 0 #000000;
  background-color:white;
`

const Image = styled.img`
  max-width: 250px;
  max-height: 250px;
  border-radius: 20px;
  opacity: ${props => props.status == 'Available'?1:.7};
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -30px;
  padding: 10px;
  border: 3px solid black;
  border-radius: 20px;
  max-width: 200px;
  background-color: white;
  font-weight: 700;
`
        
const Title = styled.div`
  font-size: 20px;
  margin-bottom: 5px;
  color: black;
`

const Status = styled.div`
  color: ${props => props.status == 'Available'? 'green': 'darkslategray'}
`