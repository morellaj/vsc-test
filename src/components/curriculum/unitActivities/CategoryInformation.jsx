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
  const { categoryText: { title, sections } } = props;

  const display = sections.map((section) => {
    const text = section.text.map((item) => <Text>{item}</Text>);
    return (
      <SectionContainer>
        <Label>{section.label}</Label>
        <TextContainer>{text}</TextContainer>
      </SectionContainer>
    );
  });

  return (
    <Container onClick={() => { setOpen(!open); }} onMouseLeave={() => { setOpen(false); }}>
      <Icon icon="question" />
      <OuterContainer open={open}>
        <InfoContainer open={open}>
          <Title>{title}</Title>
          {display}
        </InfoContainer>
      </OuterContainer>
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
`;

const OuterContainer = styled.div`
  background-color: rgba(0, 0, 0, .5);
  position: fixed;
  width: 100%;
  height: 100%;
  
  display: ${(props) => (props.open ? 'block' : 'none')};
`;

const Title = styled.div`
  color: black;
`;

const InfoContainer = styled.div`
  position:absolute;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 0 8px 0 #000000;
  max-width: 500px;
  padding: 20px 10px 20px 40px;
  font-size: 20px;
`;

const SectionContainer = styled.div`
  color: black
`;

const TextContainer = styled.ul`
  color: black
`;

const Label = styled.div`
  color: black;
`;

const Text = styled.li`
  margin-bottom: 10px;
  color: black;
`;
