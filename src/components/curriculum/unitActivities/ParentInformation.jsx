// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Component dependencies
import { Link } from 'react-router-dom';
import Icon from 'Icon';
import { parentInformationList } from 'Constants';

/** ************************************ */
// Component for the description of activities
/** ******************************** */
export default function ParentInformation(props) {
  const { unit, setInfo } = props;


  function handleClick(e) {
    // setInfo({ type: 'categoryInfo', text: 'parent' });
    setInfo({ type: e.target.getAttribute('value'), text: unit });
  }


  const display = [];
  parentInformationList.forEach((item) => {
    if (item.link) {
      display.push(
        <PlainLink to={`/${item.link}${unit}`} key={item.id}>
          <Item>
            <Icon icon={item.icon} />
            <Text>{item.text}</Text>
          </Item>
        </PlainLink>,
      );
    } else {
      display.push(
        <Item key={item.id} value={item.tag} onClick={handleClick}>
          <Icon value={item.tag} icon={item.icon} />
          <Text value={item.tag}>{item.text}</Text>
        </Item>,
      );
    }
  });

  return (
    <Container>
      <List>
        {display}
      </List>
    </Container>
  );
}


// Styling
const Container = styled.div`
  font-size: 20px;

  @media(max-width: 1200px){
    font-size: 16px;
  }
`;

const List = styled.ul`
  margin: 10px 10px 10px 20px;
  padding: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    margin: 5px;
  }
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
  cursor: pointer;
  width: fit-content;

  :hover{
    background-color: lightgray;
  }

  @media(max-width: 1200px) {
    padding: 5px;
    margin-bottom: 5px;
  }
`;

const Text = styled.div`

`;
