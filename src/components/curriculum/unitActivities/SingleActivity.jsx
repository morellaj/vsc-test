// Package dependencies
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Component dependencies
import { Link } from 'react-router-dom';


/** ************************************ */
// Component for the description of activities
/** ******************************** */
export default function SingleActivity(props) {
  const [display, setDisplay] = useState(false);
  const { title } = props;

  useEffect(() => {
    setDisplay(false);
  }, [title]);

  const name = title.toLowerCase().replace(/[?]/g, '').replace(/\s+/g, '-');
  return (
    <Container>
      <Link to={`/book?${name}`}><Image displayImg={display} onLoad={() => (setDisplay(true))} src={`assets/${name}.webp`} /></Link>
    </Container>
  );
}


// Styling
const Container = styled.div`
  width: 300px;
  height: 300px;  
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 10px;

  :hover{
    background-color: darkgray;
  }
`;

const Image = styled.img`
  width: 300px;
  border-radius: 3px;
  box-shadow: 0 0 8px 0 #000000;
  display: ${(props) => (props.displayImg ? 'block' : 'none')}
`;
