// Package dependencies
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Component dependencies
import { Link } from 'react-router-dom';


/** ************************************ */
// Component for the description of activities
/** ******************************** */
export default function SingleActivity(props) {
  const { title } = props;
  const name = title.toLowerCase().replace(/[?]/g, '').replace(/\s+/g, '-');
  return (
    <Container>
      <Link to={`/book?${name}`}><Image src={`assets/${name}.png`} /></Link>
    </Container>
  );
}

// Prop validation
SingleActivity.propTypes = {
  title: PropTypes.string.isRequired,
};

// Styling
const Container = styled.div`
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
`;
