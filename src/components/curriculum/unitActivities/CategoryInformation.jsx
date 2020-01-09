// Package dependencies
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


// Component dependencies
import Icon from 'Icon';


/** ************************************ */
// Component for the description of activities
/** ******************************** */
export default function CategoryInformation(props) {
  const [open, setOpen] = useState(false);
  const { text } = props;

  // eslint-disable-next-line react/no-array-index-key
  const display = text.map((item, i) => <Text key={i}>{item}</Text>);

  return (
    <Container onClick={() => { setOpen(!open); }} onMouseLeave={() => { setOpen(false); }}>
      <Icon icon="question" />
      <TextContainer open={open}>{display}</TextContainer>
    </Container>
  );
}

// Props validation
CategoryInformation.propTypes = {
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
};


// Styling
const Container = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  color: gray;
  font-size: 25px;
  cursor: pointer;
`;

const TextContainer = styled.ul`
  position:absolute;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 0 8px 0 #000000;
  max-width: 500px;
  padding: 20px 10px 20px 40px;
  font-size: 20px;

  display: ${(props) => (props.open ? 'block' : 'none')};
`;

const Text = styled.li`
  margin-bottom: 10px;
  color: black;
`;
