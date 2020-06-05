// Package dependencies
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaBookReader, FaFileAlt, FaListAlt } from 'react-icons/fa';
import CharacterContext from '../CharacterContext';

// Data dependencies
import character from 'Character';
const parentInformationList = [
  {
    id: 1,
    link: 'book?parents-',
    Icon: FaFileAlt,
    text: 'Parent Informational',
  },
  {
    id: 2,
    link: 'book-recommendations?',
    Icon: FaBookReader,
    text: 'Recommended Books',
  },
  {
    id: 3,
    tag: 'learning-goals',
    Icon: FaGraduationCap,
    text: 'Learning Goals',
  },
  {
    id: 4,
    tag: 'references',
    Icon: FaListAlt,
    text: 'References',
  },
];

// Component
export default function ParentInformation() {
  const { unitSelected } = useContext(CharacterContext);
  const { setInfo } = useContext(CharacterContext);
  const urlTitle = character[unitSelected].title.replace(/\s+/g, '-').toLowerCase();

  function handleClick() {
    setInfo(urlTitle);
  }

  const style = { margin: '0 5px' };

  const display = [];
  parentInformationList.forEach((item) => {
    const { link, Icon, id, text, tag } = item;
    if (link) {
      display.push(
        <Item key={id}>
          <PlainLink to={`/${link}${urlTitle}`}>
            <Icon style={style} />
            <Text>{item.text}</Text>
          </PlainLink>
        </Item>,
      );
    } else {
      display.push(
        <Item key={id} value={tag} onClick={handleClick}>
          <Icon value={tag} style={style} />
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
