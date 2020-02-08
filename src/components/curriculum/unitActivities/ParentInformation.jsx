// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Component dependencies
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faBookReader,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faListAlt,
} from '@fortawesome/free-regular-svg-icons';

const parentInformationList = [
  {
    id: 1,
    link: 'book?parents-',
    icon: faFileAlt,
    text: 'Parent Informational',
  },
  {
    id: 2,
    link: 'book-recommendations?',
    icon: faBookReader,
    text: 'Book Recommendations',
  },
  {
    id: 3,
    tag: 'learning-goals',
    icon: faGraduationCap,
    text: 'Learning Goals',
  },
  {
    id: 4,
    tag: 'references',
    icon: faListAlt,
    text: 'References',
  },
];

/** ************************************ */
// Component for the description of activities
/** ******************************** */
export default function ParentInformation(props) {
  const { unit, setInfo } = props;


  function handleClick(e) {
    setInfo({ type: e.target.getAttribute('value'), text: unit });
  }

  const style = { margin: '0 5px' };


  const display = [];
  parentInformationList.forEach((item) => {
    const {
      link, icon, id, text, tag,
    } = item;
    if (link) {
      display.push(
        <Item key={id}>
          <PlainLink to={`/${link}${unit}`}>
            <FontAwesomeIcon icon={icon} style={style} />
            <Text>{item.text}</Text>
          </PlainLink>
        </Item>,
      );
    } else {
      display.push(
        <Item key={id} value={tag} onClick={handleClick}>
          <FontAwesomeIcon value={tag} icon={icon} style={style} />
          <Text value={tag}>{text}</Text>
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
  };

  @media(max-width: 540px) {
    font-size: 12px;
  };
`;

const List = styled.ul`
  margin: 10px 10px 10px 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;

  @media (max-width: 1200px) {
    margin: 5px;
  }
`;

const PlainLink = styled(Link)`
  text-decoration: none;
  display:inline-flex;
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
