// Package dependencies
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBookReader, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setInfo } from 'Actions';

// Data dependencies
import character from 'Character';
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
    text: 'Recommended Books',
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

// Component
export default function ParentInformation() {
  const { unitSelected } = useSelector((state) => state.unitReducer);
  const dispatch = useDispatch();
  const urlTitle = character[unitSelected].title.replace(/\s+/g, '-').toLowerCase();

  function handleClick(e) {
    dispatch(setInfo({ type: e.target.getAttribute('value'), text: urlTitle }));
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
          <PlainLink to={`/${link}${urlTitle}`}>
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

  @media(max-width: 1000px){
    font-size: 16px;
  };

`;

const List = styled.ul`
  margin: 10px 10px 10px 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;

  @media (max-width: 1000px) {
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

  @media(max-width: 1000px) {
    padding: 5px;
    margin-bottom: 5px;
  }
`;

const Text = styled.div`

`;
