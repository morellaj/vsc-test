// Package dependencies
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Component dependencies
import { Link } from 'react-router-dom';
import Icon from 'Icon';
import { parentInformationList } from 'Constants';

/** ************************************ */
// Component for the description of activities
/** ******************************** */
export default function ParentInformation(props) {
  const { unit } = props;
  const display = parentInformationList.map((item) => (
    <PlainLink to={`/${item.link}${unit}`} key={item.id}>
      <Item>
        <Icon icon={item.icon} />
        <Text>{item.text}</Text>
      </Item>
    </PlainLink>
  ));
  return (
    <Container>
      <List>
        {display}
      </List>
    </Container>
  );
}

// Prop validation
ParentInformation.propTypes = {
  unit: PropTypes.string.isRequired,
};


// Styling
const Container = styled.div`
  font-size: 25px;
`;

const List = styled.ul`
  margin: 10px 10px 10px 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const PlainLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Item = styled.li`
  display:inline-flex;
  margin-bottom:10px;
  padding: 10px;
  border-radius: 10px;

  :hover{
    background-color: lightgray;
  }
`;

const Text = styled.div`

`;
