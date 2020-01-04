// Package dependencies
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


// Component dependencies and data files
import {colors} from '../../master.json';
import {list} from './Links';
import LogoPicture from '../../assets/Logo-White-Small.png';


// Component for displaying the navbar on pages
export default function Navbar() {
  const items = list.map((unit, i) => {
    return (
      <Item key={i}>
        <StyledLink to={unit.link}>
          {unit.title}
        </StyledLink>
      </Item>
    )
  })
  
  return (
    <Container>
      <LogoContainer to="/">
          <Logo src="./assets/Logo-White-Small.png'" alt="Learning is the Solution logo"/>
      </LogoContainer>
        <List>            
          {items}
        </List>
    </Container>
)}

// Styling
const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  background-color: ${colors.LITS.color};
`

const LogoContainer = styled(Link)`
  display: flex;
  flex: 0 0 260px;
  justify-content: center;
  padding: 5px;
  border-radius: 30px;

  :hover{
    background-color: ${colors.LITS.darkColor};
  }
`

const Logo = styled.img`
  width: 90%;
  max-width: 250px;
`

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items:center;
  margin: 0 20px 0 0;
  font-size: 24px;
  font-weight: bold;
  color: white;
  list-style-type: none;
`
               
const Item = styled.li`
  padding: 10px;
  border-radius: 15px;
  margin: 10px 30px;

  :hover{
    background-color: ${colors.LITS.darkColor};
  }
`

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`