// Package dependencies
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


// Component dependencies
import Icon from '../common/Icon';
import colors from 'Colors';

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function DetailItem(props) {
  const { item: { icon, label, text } } = props;
  return (
    <Container>
      <IconContainer>
        <Icon icon={icon} />
      </IconContainer>
      <TextContainer>
        <Label>{label}</Label>
        {' '}
&mdash;
        {text}
      </TextContainer>
    </Container>
  );
}

// Prop validation
DetailItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])).isRequired,
};

// Styling
const Container = styled.li`
  margin-bottom: 25px;
  display: flex;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 31.25px;
  color: ${colors.LITS.color};
`;

const TextContainer = styled.div`
  margin-left: 10px;
`;

const Label = styled.span`
  font-weight: 900;
`;
