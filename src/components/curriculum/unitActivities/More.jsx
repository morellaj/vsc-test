// Package dependencies
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


/** ************************************ */
// Component for allowing descriptions to expand or close
/** ******************************** */
export default function More(props) {
  const { more, setMore } = props;
  const text = more ? '  Less' : '...  More';
  return (
    <MoreSpan onClick={() => setMore(!more)}>
      {text}
    </MoreSpan>
  );
}

// Props validation
More.propTypes = {
  more: PropTypes.bool.isRequired,
  setMore: PropTypes.func.isRequired,
};


// Styling
const MoreSpan = styled.span`
  font-weight: 600;
  cursor: pointer;
`;
