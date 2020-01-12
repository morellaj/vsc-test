// Package dependencies
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Component dependencies
import Icon from 'Icon';
import CategoryInformation from '../info/InformationDisplay';

/** ************************************ */
// Component for the description of activities
/** ******************************** */
export default function ActivityGroup(props) {
  const {
    text, category, setInfo, activities,
  } = props;

  function handleClick() {
    console.log('clicked');
    setInfo({ type: 'categoryInfo', text: category });
  }

  return (
    <Container>
      <GroupHeader>
        <div>{text}</div>
        <IconContainer onClick={handleClick}>
          <Icon icon="question" onClick={handleClick} />
        </IconContainer>
      </GroupHeader>
      <Activities>{activities}</Activities>
    </Container>
  );
}

// Props validation
ActivityGroup.propTypes = {
  text: PropTypes.string.isRequired,
  categoryText: PropTypes.arrayOf(PropTypes.string).isRequired,
  activities: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.symbol,
    PropTypes.object,
  ])).isRequired,
};

// Styling
const Container = styled.div`
  display: inline-block;
  margin: 20px;
  border-radius: 5px;
  background-color: white;
`;

const GroupHeader = styled.div`
  display: flex;
  margin: 10px;
  font-size: 36px;
  border-bottom: 1px solid ${(props) => props.theme.color}
`;

const Activities = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
`;

const IconContainer = styled.div`
  cursor: pointer;
  color: gray;
  font-size: 25px;
  display:flex;
  align-items:center;
`;
